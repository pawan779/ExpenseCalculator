import React, { useEffect } from "react";
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
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth, tripsRef } from "../config/firebase";
import { query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { setUser } from "../redux/slices/userSlice";

const Home = () => {
  const [trips, setTrips] = React.useState<VisitedPlacesProps[]>([]);

  const { user } = useSelector((state: any) => state.user);
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();

  const fetchTrips = async () => {
    const q = query(tripsRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      navigation.navigate("AddTrip");
      return;
    }
    let data: VisitedPlacesProps[] = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    setTrips(data);
  };
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setUser({ email: "", uid: "" }));
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);

  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${Colors.heading} font-bold text-3xl shadow-sm`}>
          TravelTrackr
        </Text>

        <TouchableOpacity
          className="p-2 bg-red-300 border border-gray-200 rounded-full"
          onPress={handleSignOut}
        >
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>

      <View className="px-4 space-y-4 flex-1">
        <View className="flex-row justify-between items-center">
          <Text className={`${Colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddTrip")}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={Colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={trips}
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
              onPress={() => navigation.navigate("TripExpenses", { ...item })}
              {...item}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
