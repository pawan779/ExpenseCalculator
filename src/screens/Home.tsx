import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import { VisitedPlacesProps } from "../types/Types";
import RecentTrips from "../components/RecentTrips";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const items: VisitedPlacesProps[] = [
  {
    id: 1,
    place: "Toronto",
    country: "Canada",
  },
  {
    id: 2,
    place: "New York",
    country: "USA",
  },
  {
    id: 3,
    place: "London",
    country: "UK",
  },
  {
    id: 4,
    place: "Paris",
    country: "France",
  },
  {
    id: 5,
    place: "Tokyo",
    country: "Japan",
  },
  {
    id: 6,
    place: "Sydney",
    country: "Australia",
  },
  {
    id: 7,
    place: "Dubai",
    country: "UAE",
  },
  {
    id: 8,
    place: "Singapore",
    country: "Singapore",
  },
  {
    id: 9,
    place: "Hong Kong",
    country: "China",
  },
  {
    id: 10,
    place: "Mumbai",
    country: "India",
  },
];

const handleSigbOut = async () => {
  await signOut(auth);
};

const Home = () => {
  const navigaiton: any = useNavigation();
  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${Colors.heading} font-bold text-3xl shadow-sm`}>
          Expenses
        </Text>
        <TouchableOpacity
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          onPress={handleSigbOut}
        >
          <Text className={Colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>

      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${Colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigaiton.navigate("AddTrip")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={Colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 430 }}>
          <FlatList
            data={items}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ListEmptyComponent={
              <EmptyList message="You haven't recorded any trips yet" />
            }
            className="mx-1"
            showsVerticalScrollIndicator={false}
            keyExtractor={(items) => items.id.toString()}
            renderItem={({ item }) => (
              <RecentTrips
                onPress={() => navigaiton.navigate("TripExpenses", { ...item })}
                {...item}
              />
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
