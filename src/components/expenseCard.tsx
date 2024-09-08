import React from "react";
import { View, Text } from "react-native";
import { Category, ExpenseProps } from "../types/Types";
import { categoryBG, Colors } from "../../theme";

// Define the categories using keyof typeof

interface ExpenseCardProps extends ExpenseProps {
  category: Category;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  title,
  amount,
  category = "other",
}) => {
  return (
    <View
      style={{ backgroundColor: categoryBG[category] }}
      className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl"
    >
      <View>
        <Text className={`${Colors.heading} font-bold`}>{title}</Text>
        <Text className={`${Colors.heading} text-xs`}>{category}</Text>
      </View>
      <View>
        <Text className={`${Colors.heading} font-bold`}>${amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
