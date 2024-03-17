import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
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
  lightText: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  headingText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
