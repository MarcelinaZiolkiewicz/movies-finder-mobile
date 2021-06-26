import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import axios from "axios";

const HomeScreen = ({navigation}) => {

    const [loadedData, setLoadedData] = useState(null);
    const [filmToFind, setFilmToFind] = useState('fight');
    const [language, setLanguage] = useState('pl-PL');
    const [movieId, setMovieId] = useState( null);
    const [page, setPage] = useState( 1);
    const [isLoading, setLoading] = useState(true);

    const API_KEY = '6867970f578bc54a2df62f33811ee300';
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${language}&query=${filmToFind}&page=${page}&include_adult=false`;
    const SINGLE_MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${language}`;

    // console.log(SEARCH_URL);
    // console.log(loadedData);

    useEffect(() => {
        axios.get(SEARCH_URL)
            .then((res) => setLoadedData(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? <Text>ładowanie w toku</Text> : <Text>Znaleziono {loadedData.total_results} wyników dla hasła '{filmToFind}'</Text>}
            {/*input tu będzie*/}

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
});

export default HomeScreen;
