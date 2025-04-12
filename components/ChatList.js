import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItems from "./ChatItems";
import { useRouter } from "expo-router";

const ChatList = ({ users, currentUser }) => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ChatItems
            item={item}
            index={index}
            currentUser={currentUser}
            noBorder={index + 1 == users.length}
            router={router}
          />
        )}
      />
    </View>
  );
};

export default ChatList;
