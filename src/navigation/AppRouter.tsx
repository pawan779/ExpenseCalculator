import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import LoginScreen from "../screens/LoginScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import AddTripsScreen from "../screens/AddTripsScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="AddTrip" component={AddTripsScreen} />
      <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
