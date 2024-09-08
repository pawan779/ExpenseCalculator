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
import { ExpenseProps, VisitedPlacesProps } from "../types/Types";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/backButton";
import ExpenseCard from "../components/expenseCard";

const items: ExpenseProps[] = [
  {
    id: 1,
    title: "ate sanwich",
    amount: 10,
    category: "food",
  },
  {
    id: 2,
    title: " bough a jacket",
    amount: 100,
    category: "shopping",
  },
  {
    id: 3,
    title: "watched a movie",
    amount: 20,
    category: "entertainment",
  },
];

interface TripExpensesProps {
  route: {
    params: VisitedPlacesProps;
  };
}

const TripExpensesScreen: React.FC<TripExpensesProps> = (props) => {
  const { place, country } = props?.route?.params;
  const navigaiton: any = useNavigation();
  return (
    <ScreenWrapper>
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0 z-10">
            <BackButton />
          </View>
          <Text className={`${Colors.heading} text-xl font-bold text-center`}>
            {place}
          </Text>
          <Text className={`${Colors.heading} text-xs  text-center`}>
            {country}
          </Text>
        </View>

        <View className="flex-row justify-center items-center rounded-xl  mb-4">
          <Image
            source={require("../../assets/images/7.png")}
            className="w-80 h-80"
          />
        </View>

        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className={`${Colors.heading} font-bold text-xl`}>
              Recent Trips
            </Text>
            <TouchableOpacity
              onPress={() => navigaiton.navigate("AddExpense")}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            >
              <Text className={Colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 430 }}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message="You haven't recorded any expenses yet" />
              }
              showsVerticalScrollIndicator={false}
              keyExtractor={(items) => items.id.toString()}
              renderItem={({ item }) => <ExpenseCard {...item} />}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpensesScreen;
