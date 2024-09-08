import React from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";

interface ScreenWrapperProps {
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }} className="flex-1 ">
      {children}
    </View>
  );
};

export default ScreenWrapper;
