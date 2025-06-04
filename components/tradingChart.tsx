import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Maximize2, Settings } from 'lucide-react-native';
import TradingViewChart from './tradingViewChart';
import { SafeAreaView } from 'react-native-safe-area-context';

const TradingChart = () => {
  const [timeframe, setTimeframe] = useState("Charts");
  const timeframes = ["Charts"];

  return (
    <SafeAreaView className="flex-1 bg-[#181A20] p-2">
      {/* Top Bar */}
      <View className="flex-row justify-between px-2 py-1 border-b border-[#1f2128]">
        <View className="flex-row">
          {timeframes.map((tf) => (
            <Pressable
              key={tf}
              onPress={() => setTimeframe(tf)}
              className={`px-1.5 py-0.5 rounded ${
                timeframe === tf ? 'bg-[#1f2128]' : ''
              }`}
            >
              <Text
                className={`text-[10px] ${
                  timeframe === tf ? 'text-white' : 'text-[#6f6a6b]'
                }`}
              >
                {tf}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="flex-row space-x-3">
          <Pressable>
            <Settings size={16} color="#6f6a6b" />
          </Pressable>
          <Pressable>
            <Maximize2 size={16} color="#6f6a6b" />
          </Pressable>
        </View>
      </View>

      {/* Chart */}
      <View className="flex-1 bg-[#181A20]">
        <TradingViewChart
          symbol="BINANCE:BTCUSDT"
          interval="1"
          theme="dark"
        />
      </View>
    </SafeAreaView>
  );
};

export default TradingChart;
