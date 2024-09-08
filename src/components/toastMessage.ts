import Toast from "react-native-toast-message";

export const showToastMessage = (
  message: string,
  type: "error" | "success"
) => {
  Toast.show({
    type,
    text1: message,
    position: "bottom",
  });
};
