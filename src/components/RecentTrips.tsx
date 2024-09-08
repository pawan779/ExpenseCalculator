import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { VisitedPlacesProps } from "../types/Types";
import { Colors } from "../../theme";
import randomImage from "../../assets/images/randomImage";

const RecentTrips: React.FC<VisitedPlacesProps> = ({ id, place, country }) => {
  return (
    <View>
      <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
        <View>
          <Image source={randomImage()} className="w-36 h-36 mb-2" />
          <Text className={`${Colors.heading} font-bold`}>{place}</Text>
          <Text className={`${Colors.heading} text-xs`}>{country}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecentTrips;
