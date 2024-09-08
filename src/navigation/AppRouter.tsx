import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SignInScreen from "../screens/SignInScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import AddTripsScreen from "../screens/AddTripsScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="SignIn"
        options={{ presentation: "modal" }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{ presentation: "modal" }}
        component={SignUpScreen}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="AddTrip" component={AddTripsScreen} />
      <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
    </Stack.Navigator>
  );
};

export default AppRouter;
