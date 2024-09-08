import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import BackButton from "../components/backButton";
const AddTripsScreen = () => {
  const [place, setPlace] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleAddTrip = () => {
    if (place && country) {
      // Add trip to the list
    } else {
      // Show error message
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0 z-10">
              <BackButton />
            </View>
            <Text className={`${Colors.heading} text-xl font-bold text-center`}>
              Add Trip
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require("../../assets/images/4.png")}
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Where on Earth?
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={place}
              onChangeText={(text) => setPlace(text)}
              placeholder="E.g. Paris"
            />
            <Text className={`${Colors.heading} text-lg font-bold`}>
              Which Country?
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3 border-gray-500"
              value={country}
              onChangeText={(text) => setCountry(text)}
              placeholder="E.g. France"
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
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripsScreen;
