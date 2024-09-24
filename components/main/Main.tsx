import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";
import { LinearGradient } from "expo-linear-gradient";

export default function Main() {

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#A58814', '#0F174F']}
          //colors={['#0F174F', '#A58814']}
          start={{ x: 1.2, y: 0 }}
          locations={[0.1, 0.7]}
          style={styles.background}
        />
        <Welcome />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
})
