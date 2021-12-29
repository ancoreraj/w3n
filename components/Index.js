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
                        backgroundColor: "#171e1f",
                        paddingTop: StatusBar.currentHeight,
                    },
                    indicatorStyle: {
                        backgroundColor: "#d3eac7"
                    }
                }}
            >
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <View style={styles.tabContainer}>
                                <Feather name="home" size={27} color={focused ? '#d3eac7' : '#6f776e'} />
                            </View>
                        ),
                    }}
                    name="News" component={Discover} />
                <Tab.Screen
                    options={{
                        title: ({ color, focused }) => (
                            <View style={styles.tabContainer}>
                                <FontAwesome name="newspaper-o" size={26} color={focused ? '#d3eac7' : '#6f776e'} />
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
