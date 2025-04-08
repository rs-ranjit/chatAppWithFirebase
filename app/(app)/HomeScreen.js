import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

const HomeScreen = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
