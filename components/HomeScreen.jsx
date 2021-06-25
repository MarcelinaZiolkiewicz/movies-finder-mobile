import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Single film" onPress={() => navigation.navigate('SingleMovie')}/>
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
