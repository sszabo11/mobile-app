import { Slot } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { systemBlue } from "../../utils/variables";

export default function PrimaryButton({
  label,
  icon,
}: {
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <Pressable style={styles.button}>
      {icon && <View>{icon}</View>}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: systemBlue,
    borderRadius: 100,
    display: "flex",
    alignSelf: "flex-end",

    //justifyContent: "flex-end",

    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 16,
  },
});
