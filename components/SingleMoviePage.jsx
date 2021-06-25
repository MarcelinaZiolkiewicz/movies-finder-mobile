import React from 'react';
import {StyleSheet,Text, View} from "react-native";

const SingleMoviePage = () => {
    return (
        <View style={styles.container}>
            <Text>SingleMoviePage</Text>
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

export default SingleMoviePage;
