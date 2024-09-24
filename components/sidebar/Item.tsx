import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { systemBlue } from "../../utils/variables";

export default function Item({
  id,
  address,
  client,
  postcode,
  suburb,
  selected,
  onPress,
}: {
  address: string;
  client: string;
  suburb: string;
  postcode: number;
  id: number;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Link
      style={[
        styles.link,
        {
          backgroundColor: selected ? systemBlue : "transparent",
        },
      ]}
      href={`inspection/${id}`}
      onPress={onPress}
    >
      <View style={styles.item}>
        <Text style={[styles.title, selected && styles.white]}>{address}</Text>
        <Text
          style={[styles.paragraph, selected && styles.white]}
        >{`${suburb}, Victoria ${postcode}`}</Text>
        <View style={styles.flex}>
          <Ionicons
            name="person-outline"
            size={16}
            color={!selected ? "grey" : "#C5C5C5"}
          />
          <Text style={[styles.client, selected && styles.white]}>
            {client}
          </Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  item: {
    width: "100%",
    padding: 20,
    //height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  white: {
    color: "white",
  },

  paragraph: {
    fontSize: 14,
  },
  client: {
    fontSize: 14,
    color: "grey",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
