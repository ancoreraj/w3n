import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ navigation }) => {

    return (
        <View
            style={styles.singleNews}
        >
            <Image
                source={{ uri: 'https://cdn.vox-cdn.com/thumbor/rmLBWDzawqeTLS-e8X13lgVNBd4=/0x551:7695x4580/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23042763/Nothing__1__black_edition_closed_case.jpg' }}
                style={{ height: "40%", resizeMode: "cover", width: windowWidth, marginRight: 25 }}
            />

            <View style={styles.logo}>
                <Text style={{ color: '#d3eac7', fontFamily: 'Manrope-Bold', fontSize: 16,  }}>
                    W3N
                </Text>
            </View>

            <View
                style={{
                    ...styles.description,
                }}
            >
                <View>
                    <Text style={styles.title}>Bitcoin falls 8.4% to $49228.82 - Reuters</Text>
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
                <View style={styles.bottomButton}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.push('Browser', {
                            uri: 'https://w3n-content.vercel.app/content',
                        })}>
                        <Text style={styles.bottonText}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SingleNews

const styles = StyleSheet.create({
    logo:{
        backgroundColor: '#171e1f', 
        width:55,
        marginLeft: 15, 
        marginTop: -22, 
        alignItems: 'center',
        borderRadius: 3,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        paddingTop: 2
    },
    singleNews: {
        backgroundColor: '#2a2b32',
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    description: {
        padding: 15,
        flex: 1,
        backgroundColor: '#171e1f',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
    bottomButton: {
        padding: 5,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 52,
        width: 150,
        paddingVertical: 6,
        backgroundColor: '#d3eac7',
    },
    bottonText: {
        color: '#171e1f',
        fontFamily: 'Roboto-Regular'

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