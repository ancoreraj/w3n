import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Discover = () => {
    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171e1f'
    },
    text: {
        color: '#d3eac7',
        fontSize: 30,
        fontFamily: 'Roboto-Regular'
    }
});