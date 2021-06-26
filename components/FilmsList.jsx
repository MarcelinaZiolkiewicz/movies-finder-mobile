import React from 'react';
import {StyleSheet,Text, View} from "react-native";
import {Button} from "react-native";
import SingleMovie from "./SingleMovie";

const MoviesList = ({movies, goToMovie}) => {

    const moviesElements = movies.map(item => {
        return <SingleMovie key={item.id} movie={item} goToMovie={goToMovie}/>
    })

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Wyświetlono filmów: {movies.length}</Text>
            {moviesElements}

            <View style={styles.loadMore}>
                <Button title="Wczytaj więcej" color="#686de0" onPress={() => console.log('asd')}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    loadMore: {
        width: 300,
    },
    label: {
        width: 300
    }

});

export default MoviesList;
