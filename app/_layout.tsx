import { StyleSheet, Text, View } from "react-native";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={{ width: "28%" }}>
          <Sidebar />
        </View>
        <View style={{ width: "72%" }}>
          <Slot />
        </View>
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
  header: {
    width: "72%",
    height: 20,
    position: "absolute",
    top: 0,
    left: "28%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
});
