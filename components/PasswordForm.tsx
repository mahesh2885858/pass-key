import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CStyles from "../styles";
export default function PasswordForm() {
  const theme = useColorScheme();
  const themeTextStyle =
    theme === "light" ? CStyles.lightText : CStyles.darkText;
  const inputStyles = theme === "light" ? styles.inputLight : styles.inputDark;
  return (
    <View style={styles.container}>
      <Text style={[themeTextStyle, styles.headingText]}>PasswordForm</Text>

      <TextInput
        style={[styles.input, inputStyles]}
        placeholder="Website Name"
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder="UserName"
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder="Password"
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={[styles.input, inputStyles]}
        placeholder="Notes"
        placeholderTextColor={"gray"}
      />

      <TouchableOpacity style={[]}>
        <Text style={[themeTextStyle, CStyles.button, styles.buttonText]}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  headingText: {
    fontSize: 22,
  },
  text: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    fontSize: 20,
  },
  inputLight: {
    borderColor: "black",
    color: "black",
  },
  inputDark: {
    borderColor: "white",
    color: "white",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    backgroundColor: "red",
  },
  buttonText: {
    fontSize: 17,
    paddingHorizontal: 20,
  },
});
