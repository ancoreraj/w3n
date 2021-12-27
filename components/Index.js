import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nav from './Nav'
import News from '../screens/News/News';
import Discover from '../screens/Discover/Discover';

const Tab = createMaterialTopTabNavigator();

const Index = () => {
    return (
        <>
            <Nav />
            <Tab.Navigator>
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="Discover" component={Discover} />
            </Tab.Navigator>
        </>
    )
}

export default Index
