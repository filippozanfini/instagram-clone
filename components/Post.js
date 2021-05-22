import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Post = (props) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postUserData}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: props.post.profilePicUrl }}
              style={{ width: 30, height: 30 }}
              borderRadius={50}
            />
            <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 10 }}>
              {props.post.username}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="more-horiz" size={23} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: props.post.imageUrl }}
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
          <TouchableOpacity>
            <Ionicons
              name={props.post.liked ? "heart" : "heart-outline"}
              size={27}
              color={props.post.liked ? "#FF3E3E" : "black"}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/comment.png")}
              style={{ width: 23, height: 23, marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/direct.png")}
              style={{ width: 28, height: 28 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FontAwesome name="bookmark-o" size={25} style={{ marginRight: 5 }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.likesViewContainer}>
        {props.post.likeUsers.map((user) => {
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
            {props.post.likeUsers[0].username} and others
          </Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.commentsContainer}>
        {props.post.comments.map((comment) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Text style={{ fontWeight: "700" }}>{comment.username}</Text>
              <Text style={{ marginLeft: 5 }}>{comment.comment}</Text>
            </TouchableOpacity>
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
        {props.post.date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Post;
