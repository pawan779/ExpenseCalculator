import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../../assets/images/welcome.gif")}
            className="h-96 w-96 shadow"
          />
        </View>
        <View className="mx-5 mb-10">
          <Text
            className={`${Colors.heading} text-center font-bold text-4xl mb-10`}
          >
            Expense
          </Text>

          <TouchableOpacity
            className="shadow p-3 rounded-full mb-5"
            style={{ backgroundColor: Colors.button }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="shadow p-3 rounded-full"
            style={{ backgroundColor: Colors.button }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
