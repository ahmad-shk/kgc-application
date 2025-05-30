import { View, Text } from "react-native";
import { Link } from "expo-router";
import BinanceMarketList from "@/app-example/components/BinanceMarketList";

export default function HomeScreen() {
  return (
    <View>
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Home Screen</Text>
      
      <Link href={{ pathname: "/about" }}>
        <Text className="text-blue-500 mt-4">Go to About</Text>
      </Link>
    </View>
    <View>
     <BinanceMarketList/>
    </View>
  </View>
  );
}
