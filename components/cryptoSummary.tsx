import React from 'react';
import { View, Text } from 'react-native';

const PriceSummary = () => {
  return (
    <View className="bg-[#161616] p-4 flex-row justify-between items-start flex-wrap">
      {/* Left Side */}
      <View className="mb-2">
        <Text className="text-green-600 text-2xl font-bold">106,233.99</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-[#ffdd1c] text-sm mr-2 ">$106,202.11</Text>
          <Text className="text-red-500 text-sm ">-1.35%</Text>
        </View>
      </View>

      {/* Right Side */}
      <View className="ml-4">
        {/* Row 1: High & Low */}
        <View className="flex-row justify-between mb-1">
          <View className="mr-4">
            <Text className="text-gray-500 text-[10px]">24h High</Text>
            <Text className="text-[#ffdd1c] text-xs">108,941.17</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-[10px]">24h Low</Text>
            <Text className="text-[#ffdd1c] text-xs">104,610.03</Text>
          </View>
        </View>

        {/* Row 2: Volume BTC & USDC */}
        <View className="flex-row justify-between">
          <View className="mr-4">
            <Text className="text-gray-500 text-[10px]">24h Vol (BTC)</Text>
            <Text className="text-[#ffdd1c] text-xs">4,437.59</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-[10px]">24h Vol (USDC)</Text>
            <Text className="text-[#ffdd1c] text-xs">474.16M</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PriceSummary;
