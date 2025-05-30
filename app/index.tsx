import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

 const handleNavigate = () => {
  router.push("/market");
};

const handleNavigate1 = () => {
  router.push("/cryptoTradeScreen");
};

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">Home Screen</Text>

      <TouchableOpacity
        onPress={handleNavigate}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        <Text className="text-white font-medium">Go to Market</Text>
      </TouchableOpacity>

       <TouchableOpacity
        onPress={handleNavigate1}
        className="mt-4 px-4 py-2 bg-blue-600 rounded"
      >
        <Text className="text-white font-medium">Go to Trade Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
