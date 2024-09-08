import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import BackButton from "../components/backButton";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserLoading } from "../redux/slices/userSlice";
import LoadingComponent from "../components/loadingComponent";

const SignUpScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { userLoading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleAddTrip = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error: any) {
        console.log(error);
        dispatch(setUserLoading(false));
        Alert.alert("Error", error.message);
      }
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
              autoCapitalize="none"
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
          {userLoading ? (
            <LoadingComponent />
          ) : (
            <TouchableOpacity
              style={{ backgroundColor: Colors.button }}
              className="my-6 rounded-full p-3 shadow-sm mx-2"
              onPress={handleAddTrip}
            >
              <Text className="text-center text-white text-lg font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
