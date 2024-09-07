import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS === "android"
    ? 25
    : 0;
  return (
    <View style={{ paddingTop: statusBarHeight }} className="flex-1 ">
      {children}
    </View>
  );
};

export default ScreenWrapper;
