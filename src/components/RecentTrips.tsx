import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
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
  const itemWidth = (Dimensions.get("window").width - 48) / 2;
  return (
    <TouchableOpacity
      style={{ width: itemWidth }}
      className="bg-white p-3 rounded-2xl mb-3 shadow-sm "
      onPress={onPress}
    >
      <Image source={randomImage()} className="w-36 h-36 mb-2" />
      <Text className={`${Colors.heading} font-bold`}>{place}</Text>
      <Text className={`${Colors.heading} text-xs`}>{country}</Text>
    </TouchableOpacity>
  );
};

export default RecentTrips;
