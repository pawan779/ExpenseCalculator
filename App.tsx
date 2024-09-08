import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <View className="flex-1 ">
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </Provider>
    </View>
  );
}
