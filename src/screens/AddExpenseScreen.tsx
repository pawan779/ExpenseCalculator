import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { Colors } from "../../theme";
import BackButton from "../components/backButton";
import { categories } from "../constant/categoryData";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { VisitedPlacesProps } from "../types/Types";
import { addDoc, collection } from "firebase/firestore";
import { expensesRef } from "../config/firebase";
import LoadingComponent from "../components/loadingComponent";
import { showToastMessage } from "../components/toastMessage";
import Toast from "react-native-toast-message";

interface TripExpensesProps {
  route: {
    params: VisitedPlacesProps;
  };
}

const AddExpensesScreen: React.FC<TripExpensesProps> = (props) => {
  const { place, country, id } = props?.route?.params;
  const [title, setTile] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigation: any = useNavigation();

  const handleAddTrip = async () => {
    if (title && amount && category) {
      try {
        setLoading(true);
        let doc = await addDoc(expensesRef, {
          title,
          amount,
          category,
          tripId: id,
        });
        setLoading(false);
        if (doc.id) {
          // Redirect to home
          navigation.goBack();
        }
      } catch (error: any) {
        console.error("Error adding document: ", error);
        setLoading(false);
        showToastMessage(error.message, "error");
      }
    } else {
      showToastMessage("All fields are required", "error");
    }
  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex justify-between h-full mx-4">
          <View>
            <View className="relative mt-5">
              <View className="absolute top-0 left-0 z-10">
                <BackButton />
              </View>
              <Text
                className={`${Colors.heading} text-xl font-bold text-center`}
              >
                Add Expense
              </Text>
            </View>
            <View className="flex-row justify-center my-3 mt-5">
              <Image
                className="h-72 w-72"
                source={require("../../assets/images/expenseBanner.png")}
              />
            </View>
            <View className="space-y-2 mx-2">
              <Text className={`${Colors.heading} text-lg font-bold`}>
                For What?
              </Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3"
                value={title}
                onChangeText={(text) => setTile(text)}
                placeholder="E.g. ate sandwich"
              />
              <Text className={`${Colors.heading} text-lg font-bold`}>
                How much?
              </Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3 border-gray-500"
                value={amount}
                onChangeText={(text) => setAmount(text)}
                placeholder="E.g. 200"
                keyboardType="number-pad"
              />
              <View className="mx-2 space-x-2">
                <Text className="text-lg font-bold">Category</Text>
                <View className="flex-row flex-wrap items-center space-y-2">
                  {categories.map((item, index) => {
                    let bgColor = "bg-white";
                    if (category == item.value) {
                      bgColor = "bg-green-200";
                    }
                    return (
                      <TouchableOpacity
                        key={item.value}
                        className={`${bgColor} rounded-full  px-4 p-3 mb-2 mr-2`}
                        onPress={() => setCategory(item.value)}
                      >
                        <Text>{item.title}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
          <View>
            {loading ? (
              <LoadingComponent />
            ) : (
              <TouchableOpacity
                style={{ backgroundColor: Colors.button }}
                className="my-6 rounded-full p-3 shadow-sm mx-2"
                onPress={handleAddTrip}
              >
                <Text className="text-center text-white text-lg font-bold">
                  Add Trip
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      <Toast />
    </ScreenWrapper>
  );
};

export default AddExpensesScreen;
