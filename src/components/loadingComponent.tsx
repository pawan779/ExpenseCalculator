import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Colors } from "../../theme";

const LoadingComponent = () => {
  return (
    <View className="flex-row justify-center py-8">
      <ActivityIndicator size="large" color={Colors.button} />
    </View>
  );
};

export default LoadingComponent;
