import React from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import { STORIES } from "../data/sample_data";

const HomeScreen = (props) => {
  const renderStories = (itemData) => {
    return (
      <View style={styles.storyContainer}>
        <TouchableOpacity
          style={{
            ...styles.storyView,
          }}
        >
          {itemData.item.yourStory ? (
            <ImageBackground
              style={{
                width: 70,
                height: 70,
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
              source={{ uri: itemData.item.pic }}
              borderRadius={50}
            >
              <View style={styles.addStoryView}>
                <Ionicons name="add" color="white" size={23} />
              </View>
            </ImageBackground>
          ) : (
            <LinearGradient
              colors={
                itemData.item.viewed
                  ? ["#ccc", "#ccc"]
                  : ["#CA1D7E", "#E35157", "#F2703F"]
              }
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={{
                height: 71,
                width: 71,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 71 / 2,
              }}
            >
              <Image
                style={{
                  width: 65,
                  height: 65,
                  borderWidth: 2.5,
                  borderColor: "white",
                }}
                source={{ uri: itemData.item.pic }}
                borderRadius={50}
              />
            </LinearGradient>
          )}
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 12,
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {itemData.item.username}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView style={{ flex: 1, height: "100%" }}>
        <FlatList
          data={STORIES}
          horizontal
          renderItem={renderStories}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ flex: 1, height: 1500 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  storyContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    marginLeft: 20,
  },
  storyView: {
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addStoryView: {
    backgroundColor: "#0790F1",
    borderRadius: 50,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  myStoryView: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default HomeScreen;
