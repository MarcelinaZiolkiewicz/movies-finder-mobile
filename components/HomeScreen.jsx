import React, {createRef, useEffect, useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {Input} from "react-native-elements";


import axios from "axios";
import FilmsList from "./FilmsList";

const HomeScreen = ({navigation}) => {

    const [loadedData, setLoadedData] = useState(null);
    const [moviesList, setMoviesList] = useState(null);
    const [filmToFind, setFilmToFind] = useState('');
    const [language, setLanguage] = useState('pl-PL');
    const [movieId, setMovieId] = useState( null);
    const [page, setPage] = useState( 1);
    const [isLoading, setLoading] = useState(true);

    const API_KEY = '6867970f578bc54a2df62f33811ee300';
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${filmToFind}&page=${page}&include_adult=false`;
    const SINGLE_MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${language}`;

    const input = createRef();

    // console.log(SEARCH_URL);
    // console.log(loadedData);

    const searchFilm = () => {
        if (filmToFind) {
            axios.get(SEARCH_URL)
                .then((res) => {
                    setLoadedData(res.data);
                    setMoviesList(res.data.results);
                })
                .catch((err) => console.error(err))
                .finally(() => setLoading(false))
        }
    }

    const handleSubmit = () => {
        console.log(loadedData);
    }

    useEffect(() => {
        input.current.focus();
    }, [])

    return (
        <View style={styles.container}>

            {isLoading ? <Text style={styles.headerText}>Znajdź film w bazie ponad 662 588 filmów!</Text> : <Text style={styles.headerText}>Znaleziono {loadedData.total_results} wyników dla hasła: {filmToFind}</Text>}

            <ScrollView>
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

                {!isLoading && <FilmsList movies={moviesList}/>}

            </ScrollView>

            {/*element z listą filmów -> w propsach będzie obiekt pobrany z api*/}

            {/*<Button title="Single film" onPress={() => navigation.navigate('SingleMovie', {id: 123})}/>*/}
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
    },
    headerText: {
        padding: 10
    }
});

export default HomeScreen;
