import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import CompStyles from "./styles";
import Buttons from "./components/Buttons";
import { AntDesign } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import * as FileSystem from "expo-file-system";
import AddNewItem from "./components/AddNewItem";
const IS_PERMISSION_GRANTED_FOR_FILESYSTEM = "isPermissionGrantedForFileSystem";
const DIRECTORY_URI = "directoryURI";
const FILE_PATH = "filePath";
const FILE_NAME = "pass_key.json";
export default function App() {
  const theme = useColorScheme();
  const [dirUri, setDirUri] = useState("");
  const [filePath, setFilePath] = useState("");
  const themeTextStyle =
    theme === "light" ? CompStyles.lightText : CompStyles.darkText;
  const themeContainer =
    theme === "light" ? styles.containerBg : styles.darkContainerBg;
  const [mode, setMode] = useState<"home" | "new" | "view">("home");
  const ChangeMode = async (mode: "home" | "new" | "view") => {
    if (mode === "new") {
      if (!isPermissionGrantedToAccessFileSystem()) {
        await GetSystemFilePermissions();
      }
    }
    setMode(mode);
  };

  const saveItem = (key: string, value: string) => {
    SecureStore.setItem(key, value);
  };
  const removeItem = async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  };
  const getItem = (key: string) => {
    return SecureStore.getItem(key);
  };
  const GetSystemFilePermissions = async () => {
    try {
      const data =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (data.granted) {
        saveItem(IS_PERMISSION_GRANTED_FOR_FILESYSTEM, "true");
        saveItem(DIRECTORY_URI, data.directoryUri);
        setDirUri(data.directoryUri);
      }
    } catch (err: any) {
      console.log({ err });
      removeItem(IS_PERMISSION_GRANTED_FOR_FILESYSTEM);
      removeItem(DIRECTORY_URI);
    }
  };
  const isPermissionGrantedToAccessFileSystem = () => {
    if (!dirUri) return false;
    return true;
  };
  useEffect(() => {
    const getFilePathsFromStorage = async () => {
      setDirUri(getItem(DIRECTORY_URI) ?? "");
      setFilePath(getItem(FILE_PATH) ?? "");
    };
    getFilePathsFromStorage();
  }, []);
  return (
    <View style={[styles.container, themeContainer]}>
      <Text style={[themeTextStyle, CompStyles.headingText]}>Pass Key!!</Text>
      <StatusBar style="auto" />
      <View style={[styles.mainContainer]}>
        {mode !== "home" && (
          <TouchableOpacity
            style={[styles.closeIcon]}
            onPress={() => ChangeMode("home")}
          >
            <AntDesign name="closecircleo" size={24} color="white" />
          </TouchableOpacity>
        )}
        {/* buttons container starts */}
        {mode === "home" && <Buttons onPressCallback={ChangeMode} />}
        {/* buttons container ends */}
        {/* Add new section starts */}
        {mode === "new" && <AddNewItem />}
        {/* Add new section ends */}
        {/* View List sections starts */}
        {mode === "view" && (
          <Text style={[themeTextStyle]}>this is the list </Text>
        )}
        {/* View List sections ends */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    position: "relative",
  },
  containerBg: {
    backgroundColor: "#fff",
  },
  darkContainerBg: {
    backgroundColor: "#000",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    position: "relative",
    width: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 0,
    right: 20,
    alignSelf: "flex-end",
    zIndex: 100,
  },
});
