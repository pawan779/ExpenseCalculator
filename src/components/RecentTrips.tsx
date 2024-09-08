import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { VisitedPlacesProps } from "../types/Types";
import { Colors } from "../../theme";
import randomImage from "../../assets/images/randomImage";

interface RecentTripsProps extends VisitedPlacesProps {
  onPress: () => void;
}

const RecentTrips: React.FC<RecentTripsProps> = ({
  id,
  place,
  country,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
      onPress={onPress}
    >
      <View>
        <Image source={randomImage()} className="w-36 h-36 mb-2" />
        <Text className={`${Colors.heading} font-bold`}>{place}</Text>
        <Text className={`${Colors.heading} text-xs`}>{country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentTrips;
