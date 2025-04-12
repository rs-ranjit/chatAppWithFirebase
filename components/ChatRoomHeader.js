import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ChatRoomHeader = ({ user, router }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View className="flex-row items-center gap-4 justify-between pl-2 pr-4">
      {/* left */}
      <View className="flex-row items-center gap-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Entypo name="chevron-left" size={hp(4)} color="#737373" />
        </TouchableOpacity>
        <View>
          <Image
            source={{ uri: user?.profileUrl }}
            style={{ height: hp(4.5), aspectRatio: 1, borderRadius: 100 }}
            resizeMode="cover"
          />
        </View>
        <Text
          className="text-neutral-700 font-medium"
          style={{ fontSize: hp(2.5) }}
        >
          {user?.username}
        </Text>
      </View>
      {/* Right */}
      <View className="flex-row items-center gap-10">
        <TouchableOpacity>
          <Ionicons name="call" size={hp(2.8)} color="#737373" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="videocam" size={hp(2.8)} color="#737373" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoomHeader;
