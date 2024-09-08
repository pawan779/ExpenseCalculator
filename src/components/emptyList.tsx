import React from "react";
import { View, Text, Image } from "react-native";

interface EmptyListProps {
  message?: string;
}

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return (
    <View className="flex justify-center items-center my-5">
      <Image
        className="w-36 h-36 shadow-sm"
        source={require("../../assets/images/empty.png")}
      />
      <Text className="font-bold text-gray-400">
        {message || "Data Not Found!"}
      </Text>
    </View>
  );
};

export default EmptyList;
