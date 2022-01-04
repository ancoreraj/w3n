import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Block from './Block'

const Discover = ({navigation}) => {
    const DATA = [
    {
        id: 1,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 2,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 3,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 4,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 5,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 6,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 7,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 8,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 9,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 10,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 11,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },
    {
        id: 12,
        title: 'Why Web 3.0?',
        description: 'Why we are we shifting everything from regular to web 3.0. why do we need this.'
    },

    ]

    const renderItem = ({ item }) => (
        <Block title={item.title} description={item.description} navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#171e1f',
        padding: 15,
    },

});

