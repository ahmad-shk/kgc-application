import { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Home, BarChart2, TrendingUp, Grid, Layers, Search } from 'lucide-react-native';
import { Link } from 'expo-router';

const MarketScreen = () => {
  const cryptoData = [
    {
      name: "BTC", pair: "USDC", volume: "273.52M", price: "106,134.01",
      usdPrice: "$106,127.14", change: "-1.43%", isNegative: true,
    },
    {
      name: "ETH", pair: "USDC", volume: "105.14M", price: "2,633.90",
      usdPrice: "$2,633.21", change: "-3.65%", isNegative: true,
    },
    {
      name: "SOL", pair: "USDC", volume: "106.72M", price: "145.57",
      usdPrice: "$145.52", change: "-3.97%", isNegative: true,
    },

    {
      name: "FDUSD", pair: "USDC", volume: "97.62M", price: "0.9984",
      usdPrice: "$0.9983 USDT", change: "+0.01%", isNegative: false,
    },
    {
      name: "ETH", pair: "USDC", volume: "105.14M", price: "2,633.90",
      usdPrice: "$2,633.21", change: "-3.65%", isNegative: true,
    },
    {
      name: "SOL", pair: "USDC", volume: "106.72M", price: "145.57",
      usdPrice: "$145.52", change: "-3.97%", isNegative: true,
    },

    {
      name: "FDUSD", pair: "USDC", volume: "97.62M", price: "0.9984",
      usdPrice: "$0.9983 USDT", change: "+0.01%", isNegative: false,
    },
    {
      name: "BTC", pair: "USDC", volume: "273.52M", price: "106,134.01",
      usdPrice: "$106,127.14", change: "-1.43%", isNegative: true,
    },
    {
      name: "ETH", pair: "USDC", volume: "105.14M", price: "2,633.90",
      usdPrice: "$2,633.21", change: "-3.65%", isNegative: true,
    },
    {
      name: "SOL", pair: "USDC", volume: "106.72M", price: "145.57",
      usdPrice: "$145.52", change: "-3.97%", isNegative: true,
    },
  ];

  const mainTabs = ["Favorites", "Market", "Alpha", "Grow", "Square", "Data"];
  const filterTabs = ["Crypto", "Spot", "USD", "COIN-M", "Options"];
  const currencyTabs = ["USDC", "USDT", "FDUSD", "BNB", "BTC", "ALTS", "FIAT"];

  const bottomNavItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <BarChart2 size={20} />, label: "Markets" },
    { icon: <TrendingUp size={20} />, label: "Trade" },
    { icon: <Grid size={20} />, label: "Futures" },
    { icon: <Layers size={20} />, label: "Assets" },
  ];

  const [activeMainTab, setActiveMainTab] = useState("Market");
  const [activeFilterTab, setActiveFilterTab] = useState("Spot");
  const [activeCurrencyTab, setActiveCurrencyTab] = useState("USDC");

  return (
    <View className="bg-[#161616] text-[white] flex-1">

      <Link href="/">
        <Text className="text-blue-500 px-4 py-2">← Back to Home</Text>
      </Link>

      {/* Search Bar */}
      <View className="flex-row items-center px-4">
        <View className="relative flex-1">
          <Search
            className="absolute left-2 top-2 text-gray-400"
            size={16}
          />
          <TextInput
            className="pl-8 pr-2 py-2 text-sm bg-gray-100 rounded-md placeholder:text-[gray]"
            placeholder="Search Coin Pairs"
          />
        </View>
        <Text className="ml-2 text-lg text-white">•••</Text>
      </View>



      {/* Tabs */}
      <View className="pt-2 flex-row border-b border-[#ececec] px-2">
        {mainTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveMainTab(tab)} className="px-3 pt-2">
            <View className="items-center">
              <Text className={`text-[12px]  ${activeMainTab === tab ? 'font-bold text-[#ffffff]' : 'text-[#a7a7a7]'}`}>
                {tab}
              </Text>
              {activeMainTab === tab && (
                <View className="h-1 w-4 mt-1 bg-yellow-400 rounded-full" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>


      <View className="px-2 mt-2 flex-row">
        {filterTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveFilterTab(tab)}>
            <Text className={`px-3 py-1 text-[white] text-[12px] ${activeFilterTab === tab ? 'font-bold' : 'text-[#a7a7a7]'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-2 mt-1 flex-row">
        {currencyTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveCurrencyTab(tab)}>
            <Text className={`px-3 py-1 text-[10px] rounded-lg ${activeCurrencyTab === tab ? 'font-bold bg-[#ffffff] text-[black]' : 'text-[#a7a7a7]'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Header Row */}
      <View className="flex-row justify-between pt-4 pb-2 px-4">
        <Text className="text-xs text-[white]">Name/7 Vol</Text>
        <View className='flex-row items-center gap-8'>
          <Text className="text-xs text-[white]">Last Price</Text>
          <Text className="text-xs text-[white]">24h Chg%</Text>
        </View>
      </View>

      {/* Crypto List */}
      <ScrollView className="px-2 mb-16">
        {cryptoData.map((crypto, idx) => (
          <View key={idx} className='text-[#ffdd1c]'>
            <View className="flex-row justify-between items-center px-2 py-2">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-medium text-[#ffdd1c]">{crypto.name}</Text>
                  <Text className="text-xs text-[#ffdd1c]">/{crypto.pair}</Text>
                  <Text className="text-xs ml-1 text-[#ffdd1c]">18h</Text>
                </View>
                <Text className="text-xs text-[#ffdd1c]">{crypto.volume}</Text>
              </View>
              <View className='flex-row items-center gap-8'>
                <View className="items-end">
                  <Text className='text-[#ffdd1c]'>{crypto.price}</Text>
                  <Text className="text-xs text-[#ffdd1c]">{crypto.usdPrice}</Text>
                </View>
                <View>
                  <Text className={`px-3 py-2 text-xs rounded-lg text-white ${crypto.isNegative ? 'bg-red-500' : 'bg-green-500'}`}>
                    {crypto.change}
                  </Text>
                </View>
              </View>
            </View>
            {idx < cryptoData.length - 1 && <View className="h-px bg-gray-200 mt-2" />}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t flex-row justify-between px-4 py-2">
        {bottomNavItems.map((item, idx) => (
          <View key={idx} className="items-center">
            {item.icon}
            <Text className="text-xs mt-1">{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MarketScreen;
