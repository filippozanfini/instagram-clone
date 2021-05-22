import React from "react";
import { View, StyleSheet } from "react-native";

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#E7E7E8",
    marginTop: 3,
  },
});

export default Separator;
