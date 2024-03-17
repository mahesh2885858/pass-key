import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import CStyles from "../styles";
type Props = {
  onPressCallback: (mode: "new" | "home" | "view") => void;
};
export default function Buttons({ onPressCallback }: Props) {
  const theme = useColorScheme();
  const themeTextStyle =
    theme === "light" ? CStyles.lightText : CStyles.darkText;
  return (
    <>
      <TouchableOpacity
        onPress={() => onPressCallback("new")}
        style={[CStyles.button]}
      >
        <Text style={[themeTextStyle]}>Add New!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPressCallback("view")}
        style={[CStyles.button]}
      >
        <Text style={[themeTextStyle]}>View List!</Text>
      </TouchableOpacity>
    </>
  );
}
