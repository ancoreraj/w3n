import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import News from './components/News'
import Browser from './components/Browser'

const Stack = createStackNavigator();

const NewsIndex = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={News} name='News' />
            <Stack.Screen component={Browser} name='Browser' />
        </Stack.Navigator>
    )
}

export default NewsIndex
