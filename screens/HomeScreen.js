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
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import { STORIES, POSTS } from "../data/sample_data";

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
            fontWeight: "500",
          }}
        >
          {itemData.item.username}
        </Text>
      </View>
    );
  };

  const renderPosts = (itemData) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postUserData}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: itemData.item.profilePicUrl }}
              style={{ width: 30, height: 30 }}
              borderRadius={50}
            />
            <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 10 }}>
              {itemData.item.username}
            </Text>
          </View>
          <MaterialIcons name="more-horiz" size={23} />
        </View>
        <Image
          source={{ uri: itemData.item.imageUrl }}
          style={{ width: "100%", height: 450 }}
        />
        <View style={styles.postOptionsContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name={itemData.item.liked ? "heart" : "heart-outline"}
              size={27}
              color={itemData.item.liked ? "#FF3E3E" : "black"}
              style={{ marginRight: 10 }}
            />
            <Image
              source={require("../assets/comment.png")}
              style={{ width: 23, height: 23, marginRight: 10 }}
            />
            <Image
              source={require("../assets/direct.png")}
              style={{ width: 28, height: 28 }}
            />
          </View>
          <FontAwesome name="bookmark-o" size={25} style={{ marginRight: 5 }} />
        </View>
        <View style={styles.likesViewContainer}>
          {itemData.item.likeUsers.map((user) => {
            return (
              <Image
                source={{ uri: user.profilePic }}
                style={styles.likesPic}
                borderRadius={50}
              />
            );
          })}
          <Text style={{ fontSize: 14, marginLeft: 5 }}>
            Liked by{" "}
            <Text style={{ fontWeight: "700" }}>
              {itemData.item.likeUsers[0].username} and others
            </Text>
          </Text>
        </View>
        <View style={styles.commentsContainer}>
          {itemData.item.comments.map((comment) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <Text style={{ fontWeight: "700" }}>{comment.username}</Text>
                <Text style={{ marginLeft: 5 }}>{comment.comment}</Text>
              </View>
            );
          })}
        </View>
        <Text
          style={{
            fontSize: 12,
            color: "#777",
            fontWeight: "500",
            marginLeft: 15,
            marginTop: 5,
          }}
        >
          {itemData.item.date}
        </Text>
      </View>
    );
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
        />
        <View style={{ flex: 1, height: "100%", width: "100%" }}>
          <FlatList data={POSTS} renderItem={renderPosts} />
        </View>
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
  postContainer: {
    justifyContent: "center",
    width: "100%",
    height: 640,
  },
  postUserData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    height: 50,
  },
  postOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginHorizontal: 10,
  },
  likesViewContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 20,
  },
  likesPic: {
    width: 20,
    height: 20,
    marginLeft: -5,
    borderWidth: 1,
    borderColor: "white",
  },
  commentsContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 4,
  },
});

export default HomeScreen;
