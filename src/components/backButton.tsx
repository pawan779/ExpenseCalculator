import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="bg-white rounded-full h-8 w-8"
    >
      <Ionicons name="chevron-back" size={30} color={Colors.button} />
    </TouchableOpacity>
  );
};

export default BackButton;
