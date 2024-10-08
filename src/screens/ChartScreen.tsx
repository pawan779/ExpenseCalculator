import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { categoryBG, Colors } from "../../theme";
import BackButton from "../components/backButton";
import { PieChart } from "react-native-gifted-charts";
import { CatProps, ExpenseProps } from "../types/Types";
import EmptyList from "../components/emptyList";
import ChartCard from "../components/chartCard";

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

const ChartScreen: React.FC<TripExpensesProps> = (props) => {
  const { expenses, place, country } = props?.route?.params;
  const [category, setCategory] = React.useState<CatProps[]>(emptyData);
  const [totalAmout, setTotalAmount] = React.useState<number>(0);

  const handleExpenseCategory = () => {
    if (expenses.length === 0) {
      setCategory(emptyData);
      return;
    }
    let cat: CatProps[] = [];
    let total: number = 0;
    expenses.map((e) => {
      let index: number;
      index = cat.findIndex((i) => i.label == e.category);
      if (index > -1) {
        cat[index].value = cat[index].value + parseInt(e.amount);
      } else {
        cat.push({
          label: e.category,
          value: parseInt(e.amount),
          color: categoryBG[e.category],
        });
      }
    });

    total = cat.reduce((a, b) => a + b.value, 0);
    setTotalAmount(total);
    setCategory(cat);
  };

  useEffect(() => {
    handleExpenseCategory();
  }, []);

  return (
    <ScreenWrapper>
      <View className="flex-1 px-4">
        <View className="relative ">
          <View className="absolute top-0 left-0 z-10">
            <BackButton />
          </View>
          <Text className={`${Colors.heading} text-xl font-bold text-center`}>
            {place}
          </Text>
          <Text className={`${Colors.heading} text-xs text-center`}>
            {country}
          </Text>
        </View>

        <View className="flex-row justify-center items-center rounded-xl mt-8 py-3">
          <PieChart
            data={category}
            strokeWidth={3}
            strokeColor={"#0f1d2b"}
            radius={150}
            innerRadius={70}
            donut
            sectionAutoFocus
            focusedPieIndex={0}
            isAnimated
            animationDuration={5000}
            focusOnPress
            onPress={(data) => console.log(data)}
            centerLabelComponent={() => (
              <View>
                <Text className="text-lg font-bold text-center">
                  ${totalAmout.toFixed(2)}
                </Text>
                <Text className="text-xs text-center">Total</Text>
              </View>
            )}
          />
        </View>

        <View className="space-y-4 flex-1">
          <View className="flex-row justify-between items-center">
            <Text className={`${Colors.heading} font-bold text-xl`}>
              Expenses by Category
            </Text>
          </View>

          <FlatList
            data={
              category[0].label == "No data"
                ? []
                : category.sort((a, b) => b.value - a.value)
            }
            ListEmptyComponent={
              <EmptyList message="You haven't recorded any expenses yet" />
            }
            showsVerticalScrollIndicator={false}
            keyExtractor={(items) => items.label.toString()}
            renderItem={({ item }) => <ChartCard {...item} />}
            contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ChartScreen;
