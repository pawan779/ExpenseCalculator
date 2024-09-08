import React from "react";
import { View, Text } from "react-native";
import { Category, CatProps, ExpenseProps } from "../types/Types";
import { categoryBG, Colors } from "../../theme";

// Define the categories using keyof typeof

const ChartCard: React.FC<CatProps> = ({ label, value, color }) => {
  return (
    <View
      style={{ backgroundColor: color }}
      className="flex-row justify-between items-center py-4 px-5 mb-3 rounded-2xl"
    >
      <View>
        <Text className={`${Colors.heading} font-bold capitalize`}>
          {label}
        </Text>
      </View>
      <View>
        <Text className={`${Colors.heading} font-bold`}>${value}</Text>
      </View>
    </View>
  );
};

export default ChartCard;
