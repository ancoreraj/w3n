import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Discover from './components/Discover'
import DiscoverFull from './components/DiscoverFull';

const Stack = createStackNavigator();

const DiscoverIndex = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Discover} name='Discover' />
            <Stack.Screen component={DiscoverFull} name='DiscoverFull' />
        </Stack.Navigator>
    )
}

export default DiscoverIndex

