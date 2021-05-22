import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ShopScreen from "../screens/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen";

import {
  Foundation,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Foundation name="home" size={28} color={tabInfo.tintColor} />;
        },
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Feather name="search" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Reels: {
      screen: ReelsScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialIcons
              name="video-collection"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Shop: {
      screen: ShopScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "black",
      showLabel: false,
    },
  }
);

export default createAppContainer(TabNavigator);
