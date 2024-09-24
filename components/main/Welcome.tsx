import { StyleSheet, Text, View } from "react-native";
import Bullet from "../../assets/Bullet";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Property Inspector App</Text>
      <View style={styles.flex}>
        <Bullet />
        <Text style={styles.sub}>To begin, select a property on the left hand side</Text>
      </View>
      <View style={styles.flex}>
        <Bullet />
        <Text style={styles.sub}>Commence a new inspection by selecting the blue + button</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 25,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderRadius: 15
  },
  title: {
    fontSize: 28,

  }
  , sub: {
    fontSize: 14,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }

})
