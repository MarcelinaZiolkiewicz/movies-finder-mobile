import React from 'react';
import {StyleSheet,Text, View} from "react-native";
import {Button} from "react-native-elements";
import SingleMovie from "./SingleMovie";

const MoviesList = ({movies, goToMovie, nextPage, previousPage, pages}) => {

    const moviesElements = movies.map(item => {
        return <SingleMovie key={item.id} movie={item} goToMovie={goToMovie}/>
    })

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Wyświetlono filmów: {movies.length}</Text>
            {moviesElements}

            <View style={styles.loadMore}>
                <Button title="" type="solid"  icon={{name: "arrow-back", size: 30}} onPress={() => previousPage()} disabled={pages[1] === 1 || pages[0] === 1}/>
                <Button title="" type="solid" icon={{name: "arrow-forward", size: 30}} onPress={() => nextPage()} disabled={pages[0] === pages[1]}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    loadMore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        paddingTop: 20,
        paddingBottom: 20
    },
    label: {
        width: 300
    }

});

export default MoviesList;
