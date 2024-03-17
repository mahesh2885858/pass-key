import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import PasswordForm from "./PasswordForm";

export default function AddNewItem() {
  const [whichForm, setWhichForm] = useState<"pass" | "card">("pass");
  const passActiveStyles =
    whichForm === "pass" ? [styles.activeTextContainer] : null;
  const cardActiveStyles =
    whichForm === "card" ? [styles.activeTextContainer] : null;
  const passActiveTextStyles =
    whichForm === "pass" ? [styles.activeText] : null;
  const cardActiveTextStyles =
    whichForm === "card" ? [styles.activeText] : null;
  const ChangeFormMode = (mode: "pass" | "card") => {
    setWhichForm(mode);
  };
  return (
    <View style={[styles.container]}>
      <View style={[styles.optionsContainer]}>
        <TouchableOpacity
          onPress={() => ChangeFormMode("pass")}
          style={[styles.textContainer, passActiveStyles]}
        >
          <Text style={[styles.text, passActiveTextStyles]}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ChangeFormMode("card")}
          style={[styles.textContainer, cardActiveStyles]}
        >
          <Text style={[styles.text, cardActiveTextStyles]}>Card</Text>
        </TouchableOpacity>
      </View>
      {whichForm === "pass" && <PasswordForm />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    gap: 20,
  },
  optionsContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  textContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  activeTextContainer: {
    backgroundColor: "blue",
  },
  activeText: {
    color: "white",
  },
  text: {
    color: "black",

    textAlign: "center",

    fontSize: 20,
  },
});
