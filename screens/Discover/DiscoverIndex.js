import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Discover from './components/Discover'
import Browser from './components/Browser';

const Stack = createStackNavigator();

const DiscoverIndex = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Discover} name='Discover' />
            <Stack.Screen component={Browser} name='Browser' />
        </Stack.Navigator>
    )
}

export default DiscoverIndex

