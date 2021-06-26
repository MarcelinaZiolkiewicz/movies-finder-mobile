import React from 'react';
import {StyleSheet,Text, View} from "react-native";

const SingleMoviePage = ({ route, navigation}) => {
    const { id } = route.params;

    return (
        <View style={styles.container}>
            <Text>SingleMoviePage - {id}</Text>
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
