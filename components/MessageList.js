import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import MessageItem from "./MessageItem";

const MessageList = ({ messages, currentUser, scrollViewRef }) => {
  return (
    <ScrollView
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages.map((messages, index) => {
        return (
          <MessageItem
            messages={messages}
            key={index}
            currentUser={currentUser}
          />
        );
      })}
    </ScrollView>
  );
};

export default MessageList;
