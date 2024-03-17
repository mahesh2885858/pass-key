import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
type Props = {
  onPressCallback: (mode: "new" | "home" | "view") => void;
};
export default function Buttons({ onPressCallback }: Props) {
  const theme = useColorScheme();
  const themeTextStyle = theme === "light" ? styles.text : styles.darkText;
  return (
    <>
      <TouchableOpacity
        onPress={() => onPressCallback("new")}
        style={[styles.button]}
      >
        <Text style={[themeTextStyle]}>Add New!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressCallback("view")}
        style={[styles.button]}
      >
        <Text style={[themeTextStyle]}>View List!</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
});
