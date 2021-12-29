import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = () => {
    return (
        <View
            style={styles.singleNews}
        >

            <Image
                source={{ uri: 'https://cdn.vox-cdn.com/thumbor/rmLBWDzawqeTLS-e8X13lgVNBd4=/0x551:7695x4580/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23042763/Nothing__1__black_edition_closed_case.jpg' }}
                style={{ height: "30%", resizeMode: "cover", width: windowWidth, marginRight: 25 }}
            />


            <View
                style={{
                    ...styles.description,
                }}

            >
                <Text style={styles.title }>Bitcoin falls 8.4% to $49228.82 - Reuters</Text>
                <Text style={styles.content}>Dec 4 (Reuters) - Bitcoin dropped 8.4% to $49,228.82 at 20:01 GMT on Saturday, losing $4,514.87 from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fr from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro
                from its previous close. Bitcoin, the world's biggest and best-known cryptocurrency, is down 28.7% fro</Text>
                <Text style={{ color: "#d3eac7" }}>
                    Short by
                    <Text style={{ fontWeight: "bold" }}>
                        {" "}
                        {null ?? "unknown"}
                    </Text>
                </Text>


            </View>
            

        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    singleNews: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#2a2b32'
    },
    description: {
        padding: 15,
        flex: 1,
        backgroundColor: '#171e1f'

    },
    title: {
        fontSize: 23,
        paddingBottom: 10,
        fontFamily: 'Manrope-SemiBold',
        color: "#d3eac7"
    },
    content: {
        fontSize: 16,
        paddingBottom: 10,
        fontFamily: 'Roboto-Thin',
        color: '#d3eac7'
        
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        bottom: 25,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        
    },
});