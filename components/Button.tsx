import { View, Pressable, Text } from "react-native"


export default function Button({ label, onPress }: { label: string, onPress: () => void }) {
  return (
    <View>
      <Pressable
        style={{ backgroundColor: "#eee" }}
        onPress={onPress}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  )
}
