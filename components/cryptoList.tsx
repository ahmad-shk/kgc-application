// components/CryptoList.tsx
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

type CryptoItem = {
  name: string;
  pair: string;
  volume: string;
  price: string;
  usdPrice: string;
  change: string;
  isNegative: boolean;
};

interface CryptoListProps {
  cryptoData: CryptoItem[];
  onPressItem: () => void;
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptoData, onPressItem }) => {
  return (
    <ScrollView className="px-2 mb-16">
      {cryptoData.map((crypto, idx) => (
        <TouchableOpacity key={idx} onPress={onPressItem}>
          <View className="text-[#ffdd1c]">
            <View className="flex-row justify-between items-center px-2 py-2">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-medium text-[#ffdd1c]">{crypto.name}</Text>
                  <Text className="text-xs text-[#ffdd1c]">/{crypto.pair}</Text>
                  <Text className="text-xs ml-1 text-[#ffdd1c]">18h</Text>
                </View>
                <Text className="text-xs text-[#ffdd1c]">{crypto.volume}</Text>
              </View>
              <View className="flex-row items-center gap-8">
                <View className="items-end">
                  <Text className="text-[#ffdd1c]">{crypto.price}</Text>
                  <Text className="text-xs text-[#ffdd1c]">{crypto.usdPrice}</Text>
                </View>
                <View>
                  <Text
                    className={`px-3 py-2 text-xs rounded-lg text-white ${
                      crypto.isNegative ? 'bg-red-500' : 'bg-green-500'
                    }`}
                  >
                    {crypto.change}
                  </Text>
                </View>
              </View>
            </View>
            {idx < cryptoData.length - 1 && <View className="h-px bg-gray-200 mt-2" />}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CryptoList;
