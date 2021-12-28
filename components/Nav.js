import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Nav = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Web 3.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: "700"
    }

});

export default Nav
