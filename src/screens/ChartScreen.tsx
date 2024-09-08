import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { categoryBG, Colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/backButton";
import { useSelector } from "react-redux";
import { PieChart } from "react-native-gifted-charts";
import { ExpenseProps } from "../types/Types";

interface TripExpensesProps {
  route: {
    params: ParamsProps;
  };
}

interface ParamsProps {
  expenses: ExpenseProps[];
  place: string;
  country: string;
}

const emptyData = [
  {
    label: "No data",
    value: 100,
    color: "#717171",
  },
];

// const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];

const ChartScreen: React.FC<TripExpensesProps> = (props) => {
  const { expenses, place, country } = props?.route?.params;
  const [data, setData] = React.useState(emptyData);

  const handleChartData = () => {
    let expense = expenses.map((expense: ExpenseProps) => {
      return {
        label: expense.category,
        value: parseInt(expense.amount),
        color: categoryBG[expense.category],
      };
    });

    setData(expense);
  };

  console.log("data", data);

  useEffect(() => {
    handleChartData();
  }, []);

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

        <View className="flex-row justify-center items-center rounded-xl mt-8  py-3">
          <PieChart
            data={data}
            strokeWidth={3}
            // strokeColor="#50c878"
            // innerCircleColor={"#50c878"}
            radius={130}
            donut
            sectionAutoFocus
            isAnimated
            animationDuration={5000}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ChartScreen;
