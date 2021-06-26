import React, {useEffect, useState} from 'react';
import {StyleSheet,Text, View, ScrollView} from "react-native";

import axios from "axios";

import {Image} from "react-native-elements";
import MovieDetails from "./MovieDetails";

const SingleMoviePage = ({ route }) => {

    const { id } = route.params;
    const [language, setLanguage] = useState('pl-PL');
    const [movie, setMovie] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const API_KEY = '6867970f578bc54a2df62f33811ee300';
    const SINGLE_MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${language}`;

    const backgroundPath = () => {
        if (!isLoading) {
            return `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        }
    }

    const releaseDate = () => { if (!isLoading) return movie.release_date.slice(0,4) }

    useEffect(() => {
        axios.get(SINGLE_MOVIE_URL)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <View style={styles.container}>
            {!isLoading && <View>
                 <Image source={{uri: backgroundPath()}} style={styles.background} resizeMode="cover"/>
                 <ScrollView style={styles.wrapper}>
                     <View>
                         <Text style={styles.title}>{movie.title} | {releaseDate()}</Text>
                     </View>

                     <MovieDetails genres={movie.genres} prodCountries={movie.production_countries} rate={movie.vote_average}/>

                     <View>
                         <Text style={{padding: 10, fontSize: 18}}> {movie.overview} </Text>
                     </View>
                 </ScrollView>
            </View>}
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
    background: {
        flex: 0.4,
    },
    wrapper: {
        flex: 2,
        backgroundColor: '#ddd'
    },
    title: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 26
    }
});

export default SingleMoviePage;
