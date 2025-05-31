import React, { useRef } from "react";
import { Animated, Pressable, Text, GestureResponderEvent } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Define props interface
interface AppButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;  // React Native Pressable onPress event type
}

export default function AppButton({ title, onPress }: AppButtonProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      friction: 4,
      tension: 100,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 100,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className="rounded-3xl overflow-hidden shadow-lg"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <LinearGradient
          colors={["#6a11cb", "#2575fc"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="py-4 px-10 rounded-3xl items-center"
        >
          <Text className="text-white text-lg font-extrabold tracking-wider">
            {title}
          </Text>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}
