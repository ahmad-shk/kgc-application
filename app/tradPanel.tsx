import { View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { ChevronDown, ChevronLeft } from 'lucide-react-native'; // import icon

import CryptoSummary from '@/components/cryptoSummary';
import OrderBook from '@/components/orderBools';
import { router } from 'expo-router';
import { useState } from 'react';
import CryptoMarketPopup from '@/components/cryptoMarketPopup';
import TradingChart from '../components/tradingChart';

const TrdePanel = () => {
  const [visible, setVisible] = useState(false);

  const handleNavigate = () => {
    router.push("/market");
  };
  const handleNavigate1 = () => {
    router.push("/cryptoTradeScreen");
  };
  return (
    <View className="bg-[#161616] flex-1">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 border-b border-gray-700">
        <Pressable className="mr-2" onPress={handleNavigate}>
          <ChevronLeft color="white" size={24} />
        </Pressable>

        <Text className="text-[#ffdd1c] font-bold text-lg mr-1">BTC/USDT</Text>

        <Pressable className="flex-row items-center" onPress={() => setVisible(true)}>
          <ChevronDown color="#6B7280" size={20} />
          <CryptoMarketPopup visible={visible} onClose={() => setVisible(false)} />
        </Pressable>
      </View>


      {/* Main Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <CryptoSummary />
        <TradingChart />
        <OrderBook />
      </ScrollView>

      {/* Fixed Bottom Buttons */}
      <View className="absolute bottom-4 left-4 right-4 flex-row space-x-4">
        <TouchableOpacity
          onPress={handleNavigate1}
          className="flex-1 bg-green-600 py-4 rounded-xl items-center shadow-lg"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold uppercase text-base">Long</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigate1}
          className="flex-1 bg-red-600 py-4 rounded-xl items-center shadow-lg"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold uppercase text-base">Short</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrdePanel;
