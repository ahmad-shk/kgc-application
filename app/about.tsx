import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">About Page</Text>

      <Link href="/">
        <Text className="text-blue-500 mt-4">Back to Home</Text>
      </Link>
    </View>
  );
}
