import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import DiscoverIndex from '../screens/Discover/DiscoverIndex';
import NewsIndex from '../screens/News/NewsIndex';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    return (
        <>
            <Tab.Navigator
                barStyle={{
                    // backgroundColor: "#171e1f",
                    backgroundColor: "#d3eac7",
                    borderRadius: 5,
                    height: 45

                }}
            >
                <Tab.Screen
                    name="NewsIndex"
                    component={NewsIndex}
                    options={{
                        tabBarLabel: null,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ width: 30, height: 30, justifyContent: 'center' }}>
                                <Feather name="home" size={focused ? 26 : 20} color='#171e1f' />
                            </View>
                        ),
                    }} />

                <Tab.Screen
                    name="DiscoverIndex"
                    component={DiscoverIndex}
                    options={{
                        tabBarLabel: null,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ width: 30, height: 30, justifyContent: 'center' }}>
                                <FontAwesome name="newspaper-o" size={focused ? 26 : 20} color='#171e1f' />
                            </View>
                        ),
                    }}

                />
            </Tab.Navigator>
        </>
    )
}

export default Index
