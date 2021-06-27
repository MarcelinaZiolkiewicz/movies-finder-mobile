import React, {createRef, useEffect, useRef, useState} from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";

import axios from "axios";

import FilmsList from "./FilmsList";
import Label from "./Label";

const HomeScreen = ({navigation}) => {

    const [loadedData, setLoadedData] = useState(null);
    const [moviesList, setMoviesList] = useState(null);
    const [filmToFind, setFilmToFind] = useState('');
    const [language, setLanguage] = useState('pl-PL');
    const [pages, setPages] = useState( []);
    const [isLoading, setLoading] = useState(true);

    const API_KEY = '6867970f578bc54a2df62f33811ee300';
    const SEARCH_URL = (page) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${filmToFind}&page=${page}&include_adult=false`;

    const input = createRef();
    const scrollView = useRef();

    const getData = page => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${filmToFind}&page=${page}&include_adult=false`)
            .then((res) => {
                setLoadedData(res.data);
                setMoviesList(res.data.results);
                setPages([res.data.page, res.data.total_pages]);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }

    const searchFilm = () => {
        if (filmToFind) {
            getData(1)
        }
    }

    const goToMoviePage = (id, title) => {
        navigation.navigate('Film', {id: id, name: title})
    }

    useEffect(() => {
        input.current.focus();
    }, [])

    return (
        <View style={styles.container}>

            <ScrollView ref={scrollView}>

                <Label isLoading={isLoading} filmToFind={filmToFind} results={loadedData}/>

                <View style={styles.inputBox}>
                    <Input
                        ref={input}
                        placeholder="Szukaj filmu"
                        onChangeText={value => {
                            setFilmToFind(value);
                        }}
                        onSubmitEditing={searchFilm}
                    />
                </View>

                {!isLoading &&
                    <FilmsList
                        movies={moviesList}
                        goToMovie={goToMoviePage}
                        previousPage={() => getData(loadedData.page - 1)}
                        nextPage={() => {
                            scrollView.current?.scrollTo({y: 0, animated: true});
                            getData(loadedData.page + 1)
                        }}
                        pages={pages}
                    />}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        flexDirection: 'row',
        padding: 10
    }
});

export default HomeScreen;
