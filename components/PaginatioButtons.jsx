import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const PaginationButtons = ({ previousPage, nextPage, pages }) => {
    return (
        <View style={styles.loadMore}>
            <Button
                type="outline"
                icon={{name: "arrow-back", size: 25}}
                onPress={() => previousPage()}
                disabled={pages[1] === 1 || pages[0] === 1}
            />
            <Button
                type="outline"
                icon={{name: "arrow-forward", size: 25}}
                onPress={() => nextPage()}
                disabled={pages[0] === pages[1]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    loadMore: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20
    }
});


export default PaginationButtons;
