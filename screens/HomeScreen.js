import React from "react";
import { View, ScrollView, FlatList, StyleSheet } from "react-native";

import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import Story from "../components/Story";
import { STORIES, POSTS } from "../data/sample_data";
import Post from "../components/Post";
import Separator from "../components/Separator";

const HomeScreen = () => {
  const renderStories = (itemData) => {
    return <Story story={itemData.item} />;
  };

  const renderPosts = (itemData) => {
    return <Post post={itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView
        style={{ flex: 1, height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={STORIES}
          horizontal
          renderItem={renderStories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
        <Separator />
        <FlatList
          data={POSTS}
          renderItem={renderPosts}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default HomeScreen;
