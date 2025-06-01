// TradingChart.tsx

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Maximize2, Settings } from 'lucide-react-native';
import TradingViewChart from './tradingViewChart';

const TradingChart = () => {
  const [timeframe, setTimeframe] = useState("Charts");
  const timeframes = ["Charts"];

  return (
    <View style={{ flex: 1, backgroundColor: '#181A20', padding: 8, borderRadius: 16 }}>
      {/* Top Control Bar */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#1f2128'
      }}>
        {/* Timeframe Buttons */}
        <View style={{ flexDirection: 'row' }}>
          {timeframes.map((tf) => (
            <Pressable
              key={tf}
              onPress={() => setTimeframe(tf)}
              style={{
                paddingHorizontal: 6,
                paddingVertical: 2,
                backgroundColor: timeframe === tf ? '#1f2128' : 'transparent',
                borderRadius: 4
              }}
            >
              <Text style={{ fontSize: 10, color: timeframe === tf ? 'white' : '#6f6a6b' }}>
                {tf}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Settings and Maximize Buttons */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Pressable>
            <Settings size={16} color="#6f6a6b" />
          </Pressable>
          <Pressable>
            <Maximize2 size={16} color="#6f6a6b" />
          </Pressable>
        </View>
      </View>

      {/* Chart Container */}
      <View style={{ flex: 1 }}>
        <View style={{
          position: 'absolute',
          top: 0, bottom: 0, left: 0, right: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ width: '100%', height: '100%', backgroundColor: '#181A20', overflow: 'hidden' }}>
           <TradingViewChart/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TradingChart;
