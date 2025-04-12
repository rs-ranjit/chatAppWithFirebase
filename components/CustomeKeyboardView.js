import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";

const ios = Platform.OS == "android";

const CustomeKeyboardView = ({ children, inChat }) => {
  let kavConfig = {};
  let ScrollViewConfig = {};
  if (inChat) {
    kavConfig = {
      keyboardVerticalOffset: 90,
    };
    ScrollViewConfig = { contentContainerStyle: { flex: 1 } };
  }
  return (
    <KeyboardAvoidingView
      behavior="android? 'height': 'padding "
      style={{ flex: 1 }}
      {...kavConfig}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...ScrollViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomeKeyboardView;
