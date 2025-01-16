import { View, Text } from "react-native";
import React from "react";

interface MessageProps {
  message: {
    content: string;
    from: string;
    date: string;
  };
}

const MessageItem = ({ message }: MessageProps) => {
  return (
    <View
      className={`${
        message.from === "me" ? "ml-4 bg-gray-500 " : "bg-white ml-0"
      } mt-4  p-2 rounded-lg w-[95%]`}
    >
      <Text
        className={`${message.from === "me" ? "text-white" : "text-black"}`}
      >
        {message.content}
      </Text>
      <Text
        className={`${
          message.from === "me" ? "text-white" : "text-black"
        } mt-4`}
      >
        {message.date}
      </Text>
    </View>
  );
};

export default MessageItem;
