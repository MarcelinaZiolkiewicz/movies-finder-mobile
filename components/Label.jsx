import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Label = ({ isLoading, results, filmToFind }) => {
    return (
        <View>
            {isLoading ? <Text style={styles.headerText}>
                    Znajdź film w bazie ponad 662 588 filmów!
                </Text>
                :
                <Text style={styles.headerText}>
                    Znaleziono {results.total_results} wyników dla hasła: {filmToFind}
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    headerText: {
        padding: 10
    }
});


export default Label;
