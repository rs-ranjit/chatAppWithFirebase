import { Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, useSegments } from "expo-router";

import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useRouter } from "expo-router";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      router.replace("HomeScreen");
    } else if (isAuthenticated == false) {
      router.replace("SignIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

export default function _layout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
