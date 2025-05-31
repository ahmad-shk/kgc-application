import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

 const handleNavigate = () => {
  router.push("/market");
};

const handleNavigate1 = () => {
  router.push("/cryptoTradeScreen");
};
const handleNavigate2 = () => {
  router.push("/tradPanel");
};

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Home Screen</Text>

      <Pressable
        onPress={handleNavigate}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        <Text className="text-white font-medium">Go to Market</Text>
      </Pressable>

       <Pressable
        onPress={handleNavigate1}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        <Text className="text-white font-medium">Go to Trade Screen</Text>
      </Pressable>
      <Pressable
        onPress={handleNavigate2}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        <Text className="text-white font-medium">Go to Graph Screen</Text>
      </Pressable>
    </View>
  );
}
