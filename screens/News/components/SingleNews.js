import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ navigation, news }) => {

  return (
    <View style={styles.singleNews}>
      <Image
        source={{
          uri: news.imageUrl
        }}
        style={{
          height: "35%",
          resizeMode: "cover",
          width: windowWidth,
          marginRight: 25,
        }}
      />

      <View style={styles.logo}>
        <Text
          style={{ color: "#d3eac7", fontFamily: "Manrope-Bold", fontSize: 16, }}
        >
          Crypto69
        </Text>
      </View>

      <View
        style={{
          ...styles.description,
        }}
      >
        <View>
          <Text style={styles.title}>
            {news.title}
          </Text>
          <Text style={styles.content}>
            {news.body}
          </Text>
          <Text style={{ color: "#d3eac7" }}>
            Short by
            <Text style={{ fontWeight: "bold" }}> {news.source ?? "unknown"}</Text>
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Browser', {
                uri: news.mainUrl,
            })}
          >
            <Text style={styles.bottonText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "#171e1f",
    width: 105,
    marginLeft: 15,
    marginTop: -22,
    alignItems: "center",
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingTop: 2,
  },
  singleNews: {
    backgroundColor: "#2a2b32",
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  description: {
    padding: 15,
    flex: 1,
    backgroundColor: "#171e1f",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    paddingBottom: 5,
    fontFamily: "Manrope-SemiBold",
    color: "#d3eac7",
  },
  content: {
    fontSize: 16,
    paddingBottom: 10,
    fontFamily: "Roboto-Light",
    color: "#d3eac9",
  },
  bottomButton: {
    padding: 5,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 52,
    width: 150,
    paddingVertical: 6,
    backgroundColor: "#d3eac7",
  },
  bottonText: {
    color: "#171e1f",
    fontFamily: "Roboto-Regular",
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
