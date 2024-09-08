import React from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast from "react-native-toast-message";
import "react-native-reanimated";

export default function App() {
  return (
    <View className="flex-1 ">
      <StatusBar style="auto" />
      <Provider store={store}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <NavigationContainer>
            <Toast />
            <AppRouter />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </Provider>
    </View>
  );
}
