import React from 'react';
import { StyleSheet,Text, View } from "react-native";

const MovieDetails = ({ genres, prodCountries, rate }) => {

    const genre = genres.map(item => {
        return <Text key={item.id} style={{marginLeft: 5, fontSize: 16}}>{item.name},</Text>
    })

    const countries = prodCountries.map(item => {
        return <Text key={item.id} style={{marginLeft: 5, fontSize: 16}}>{item.name},</Text>
    })

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Kategorie: </Text>
                {genres.length > 0 ? genre : <Text style={styles.text}>Brak kategorii</Text>}
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Kraje produkcji: </Text>
                {prodCountries > 0 ? countries : <Text style={styles.text}>brak krajów produkcji</Text>}
            </View>
            <View style={styles.box}>
                <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 5}}>Ocena: {rate ? rate : 'brak oceny'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#95afc0',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingTop: 5,
    },
    label: {
        width: 300
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default MovieDetails;
