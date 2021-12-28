import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, FontAwesome } from '@expo/vector-icons';
import News from '../screens/News/News';
import Discover from '../screens/Discover/Discover';

const Tab = createMaterialTopTabNavigator();

const Index = () => {

    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: "#fff",
                        paddingTop: StatusBar.currentHeight,
                    },
                    indicatorStyle: {
                        backgroundColor: "#262250"
                    }
                }}
            >
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <View style={styles.tabContainer}>
                                <Feather name="home" size={27} color={focused ? '#312F62' : '#B1AFCD'} />
                            </View>
                        ),
                    }}
                    name="News" component={Discover} />
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <View style={styles.tabContainer}>
                                <FontAwesome name="newspaper-o" size={26} color={focused ? '#312F62' : '#B1AFCD'} />
                            </View>
                        ),
                    }} name="Discover" component={News} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({

});
export default Index
