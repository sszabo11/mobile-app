import { StyleSheet, Text, View } from "react-native";

export default function Header(title: string) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
