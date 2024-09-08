import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation: any = useNavigation();

  const handleAddTrip = () => {
    if (email && password) {
      navigation.goBack();
      navigation.navigate("Home");
    } else {
      // Show error message
      console.log("Please fill all fields");
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>
            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              Sign Up
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-80 w-80"
              source={require("../../assets/images/signup.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${Colors.heading} text-lg font-bold`}>Email</Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="E.g. expense@gmail.com"
            />
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Password
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3 border-gray-500"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholder="E.g. password"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: Colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
            onPress={handleAddTrip}
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
