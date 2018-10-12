import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";

const SalutationForm = props => {
    return (
        <View style={styles.container}>
            <Text>{props.text}</Text>
            <Button title="Hi" onPress={props.onButtonPressHi}/>
            <Button title="Bye" onPress={props.onButtonPressBye}/>
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

export default SalutationForm