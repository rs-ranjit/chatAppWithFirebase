import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HomeScreen from "./HomeScreen";
import HomeHeader from "../../components/HomeHeader";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
