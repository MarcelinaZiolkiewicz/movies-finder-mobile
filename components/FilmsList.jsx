import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import SingleMovie from "./SingleMovie";
import PaginationButtons from "./PaginatioButtons";

const MoviesList = ({movies, goToMovie, nextPage, previousPage, pages}) => {

    const moviesElements = movies.map(item => {
        return <SingleMovie key={item.id} movie={item} goToMovie={goToMovie}/>
    })

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Filmów na stronie: {movies.length}</Text>

            {moviesElements}

            {movies.length > 0 &&
                <PaginationButtons
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pages={pages}
                />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    label: {
        width: '100%',
        textAlign: 'center'
    }
});

export default MoviesList;
