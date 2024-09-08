import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/backButton";
import { useSelector } from "react-redux";

interface TripExpensesProps {
  route: {
    params: ParamsProps;
  };
}

interface ParamsProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  place: string;
  country: string;
}

const ChartScreen: React.FC<TripExpensesProps> = (props) => {
  const { id, title, amount, category, place, country } = props?.route?.params;

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

        <View className="flex-row justify-center items-center rounded-xl  mb-4"></View>
      </View>
    </ScreenWrapper>
  );
};

export default ChartScreen;
