import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import axios from "axios";
import SingleMovie from "./SingleMovie";

//trending
// https://api.themoviedb.org/3/trending/all/day?api_key=6867970f578bc54a2df62f33811ee300

const Horizontal = ({ goToMovie, label, URL }) => {
    const [trending, setTrending] = useState([]);
    const [isLoading, setLoading] = useState(true);



    const moviesElements = trending.map(item => {
        return <SingleMovie key={item.id} movie={item} goToMovie={goToMovie} smallPage={true}/>
    })

    useEffect(() => {
        axios.get(URL)
            .then((res) => {
                setTrending(res.data.results.slice(0,10));
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label} --> </Text>
            <ScrollView style={styles.scrollView} horizontal={true}>
                {!isLoading ? moviesElements : null}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    scrollView: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Horizontal;
