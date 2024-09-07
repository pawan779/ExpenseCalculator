import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import ScreenWrapper from "./src/components/screenWrapper";

export default function App() {
  return (
    <View className="flex-1 ">
      <StatusBar style="auto" />
      <ScreenWrapper>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </ScreenWrapper>
    </View>
  );
}
