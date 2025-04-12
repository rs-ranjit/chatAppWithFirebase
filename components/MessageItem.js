import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EndOfLineState } from "typescript";

const MessageItem = ({ messages, currentUser }) => {
  if (currentUser?.userId === messages?.userId) {
    return (
      <View className="flex-row justify-end mb-2 mr-3 flex-1">
        <View style={{ width: wp(80) }}>
          <View className="flex self-end p-3 rounded-2xl bg-white border-neutral-200">
            <Text style={{ fontSize: hp(1.9) }}>{messages?.text}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ width: wp(80) }} className="ml-3 mb-3">
        <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200 ">
          <Text style={{ fontSize: hp(1.9) }}>{messages?.text}</Text>
        </View>
      </View>
    );
  }
};

export default MessageItem;
