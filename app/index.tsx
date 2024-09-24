import { StyleSheet, Text, View } from "react-native";
import Main from "../components/main/Main";

export default function Page() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
});
