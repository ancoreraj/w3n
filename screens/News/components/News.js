import React from 'react'
import { View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import SingleNews from './SingleNews'

const News = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Swiper horizontal={false} loop={true}>
                <SingleNews navigation={navigation} />
                <SingleNews navigation={navigation} />
                <SingleNews navigation={navigation} />
                <SingleNews navigation={navigation} />
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

export default News
