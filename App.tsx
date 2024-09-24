import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Sidebar />
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
});
