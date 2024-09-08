import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SignInScreen from "../screens/SignInScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import AddTripsScreen from "../screens/AddTripsScreen";
import TripExpensesScreen from "../screens/TripExpensesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import ChartScreen from "../screens/ChartScreen";

const Stack = createStackNavigator();

const AppRouter = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  console.log("user", user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        dispatch(setUser({ email: u.email, uid: u.uid }));
      } else {
        dispatch(setUser({ email: "", uid: "" })); // Clear user if signed out
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (user?.uid) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="AddTrip" component={AddTripsScreen} />
        <Stack.Screen name="TripExpenses" component={TripExpensesScreen} />
        <Stack.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    );
  } else {
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
      </Stack.Navigator>
    );
  }
};

export default AppRouter;
