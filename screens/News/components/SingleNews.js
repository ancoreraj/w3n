import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SingleNews = () => {
    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});