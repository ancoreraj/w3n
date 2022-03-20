import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import SingleNews from "./SingleNews";
import newsData from "./dummyNewsData";

const News = ({ navigation }) => {
  const [showSwiper, setShowSwiper] = useState(false)
  const [news, setNews] = useState([])

  useEffect(()=>{
    setNews(newsData)
  },[])

  return (
    <View style={styles.wrapper}>
      <Swiper horizontal={false} loop={true} showsPagination={false}>
        {
          news.map((singleNews)=>{
            return (
              <SingleNews key={singleNews.title} news={singleNews} navigation={navigation} />
            )
          })
        }
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default News;
