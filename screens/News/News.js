import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import SingleNews from './components/SingleNews'

const News = () => {
    return (
        <Swiper style={styles.wrapper} horizontal={false} loop={false}>
            <SingleNews />
        </Swiper>
    )
}


const styles = StyleSheet.create({

});

export default News
