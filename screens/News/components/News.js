import React from 'react'
import { StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import SingleNews from './SingleNews'

const News = ({navigation}) => {
    return (
        <Swiper style={styles.wrapper} horizontal={false} loop={true}>
            <SingleNews navigation={navigation} />
        </Swiper>
    )
}


const styles = StyleSheet.create({

});

export default News
