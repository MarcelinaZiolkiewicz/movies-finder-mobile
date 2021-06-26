import React from 'react';
import {StyleSheet,Text, View} from "react-native";

const SingleMovie = ({movie}) => {

    console.log(movie.title);

    return (
        <View style={styles.container}>
            <Text>{movie.title}</Text>
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

export default SingleMovie;
