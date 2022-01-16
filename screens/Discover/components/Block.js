import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const windowWidth = Dimensions.get("window").width;

const Block = ({ title, description, navigation }) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Browser', {
                uri: 'https://w3n-content.vercel.app/content',
            })}>
            <View style={styles.block}>
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default Block

const styles = StyleSheet.create({
    block: {
        borderWidth: 1,
        borderColor: '#d3eac7',
        borderRadius: 4,
        padding: 5,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    headerText: {
        color: '#d3eac7',
        fontSize: 35,
        fontFamily: 'Roboto-Regular',
        paddingLeft: 8
    },
    descriptionText: {
        color: '#98b389',
        fontFamily: 'Roboto-Regular',
        paddingLeft: 8
    }
});