import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/logo.png")}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.headerBtn}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/add.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Ionicons name="heart-outline" size="30" />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground
              source={require("../assets/messenger.png")}
              style={{
                width: 30,
                height: 30,
                justifyContent: "flex-start",
                alignItems: "flex-end",
              }}
            >
              <View style={styles.notificationBadge}>
                <Text style={{ color: "white", fontSize: 10 }}>4</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    height: 105,
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    marginLeft: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerBtn: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  notificationBadge: {
    width: 18,
    height: 18,
    backgroundColor: "#FF3E3E",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
