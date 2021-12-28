import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import News from '../screens/News/News';
import Discover from '../screens/Discover/Discover';

const Tab = createMaterialTopTabNavigator();

const Index = () => {
    return (
        <>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: "#262250",
                        paddingTop: StatusBar.currentHeight,
                    },
                    indicatorStyle: {
                        backgroundColor: "white"
                    }
                }}

            >
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <View style={styles.tabContainer}>
                                <Entypo name="home" size={26} color={focused ? 'white' : '#B1AFCD'} />
                            </View>


                        ),
                    }}
                    name="News" component={News} />
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <FontAwesome name="newspaper-o" size={24} color={focused ? 'white' : '#B1AFCD'} />
                        ),
                    }} name="Discover" component={Discover} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        padding: 5
    }
});
export default Index
