import React from 'react';
import {StyleSheet,Text, View} from "react-native";

import SingleMovie from "./SingleMovie";

const MoviesList = ({movies}) => {

    const moviesElements = movies.map(item => {
        return <SingleMovie key={item.id} movie={item}/>
    })

    return (
        <View style={styles.container}>
            <Text>Wyświetlono filmów: {movies.length}</Text>
            {moviesElements}
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

export default MoviesList;
