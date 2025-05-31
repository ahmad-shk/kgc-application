import { View, Text, Pressable,Image } from "react-native";
import { useRouter } from "expo-router";
import AppButton from "@/components/appButton";

export default function HomeScreen() {
  const router = useRouter();

 const handleNavigate = () => {
  router.push("/market");
};
  return (
        <View className="flex-1 bg-[#090a0c] items-center justify-center px-6">
      <Image
        source={require("../assets/images/logo.png")}
        className="w-48 h-48 mb-12"
        resizeMode="contain"
      />

      <AppButton title="Go To App" onPress={handleNavigate} />
    </View>
  );
}
