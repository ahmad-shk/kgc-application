import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import { Home, BarChart2, TrendingUp, Grid, Layers, Search } from 'lucide-react-native';
import { Link } from 'expo-router';

const AboutScreen = () => {
  const cryptoData = [
    {
      name: "BTC", pair: "USDC", volume: "273.52M", price: "106,134.01",
      usdPrice: "$106,127.14", change: "-1.43%", isNegative: true,
    }, {
      name: "BTC", pair: "USDC", volume: "273.52M", price: "106,134.01",
      usdPrice: "$106,127.14", change: "-1.43%", isNegative: true,
    }, {
      name: "BTC", pair: "USDC", volume: "273.52M", price: "106,134.01",
      usdPrice: "$106,127.14", change: "-1.43%", isNegative: true,
    }, {
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
      name: "SUI", pair: "USDC", volume: "87.45M", price: "3.5011",
      usdPrice: "$3.5", change: "-3.64%", isNegative: true,
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
    <View className="bg-white flex-1">


      <Link href={{ pathname: "/" }}>
        <Text className="text-blue-500 mt-4">back to Home</Text>
      </Link>


      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-2">
       
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center px-4 py-2">
        <View className="relative flex-1">
          <Search className="absolute left-2 top-2 text-gray-400" size={16} />
          <TextInput
            className="pl-8 h-8 text-sm bg-gray-100 rounded-md"
            placeholder="Search Coin Pairs"
          />
        </View>
        <Text className="ml-2">•••</Text>
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-2">
        {mainTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveMainTab(tab)}>
            <Text className={`px-3 py-2 text-sm ${activeMainTab === tab ? 'font-bold border-b-2 border-black' : 'text-gray-500'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-2 mt-2">
        {filterTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveFilterTab(tab)}>
            <Text className={`px-3 py-1 text-xs ${activeFilterTab === tab ? 'font-bold' : 'text-gray-500'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-2 mt-1">
        {currencyTabs.map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveCurrencyTab(tab)}>
            <Text className={`px-3 py-1 text-xs ${activeCurrencyTab === tab ? 'font-bold' : 'text-gray-500'}`}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Header Row */}
      <View className="flex-row justify-between px-4 py-2">
        <Text className="text-xs text-gray-500">Name/7 Vol</Text>
        <Text className="text-xs text-gray-500">Last Price</Text>
        <Text className="text-xs text-gray-500">24h Chg%</Text>
      </View>

      {/* List */}
      <ScrollView className="px-2 mb-16">
        {cryptoData.map((crypto, idx) => (
          <View key={idx}>
            <View className="flex-row justify-between items-center px-2 py-2">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-medium">{crypto.name}</Text>
                  <Text className="text-xs text-gray-500 ml-1">/{crypto.pair}</Text>
                  <Text className="text-xs ml-1">18h</Text>
                </View>
                <Text className="text-xs text-gray-500">{crypto.volume}</Text>
              </View>
              <View className="items-end">
                <Text>{crypto.price}</Text>
                <Text className="text-xs text-gray-500">{crypto.usdPrice}</Text>
              </View>
              <View>
                <Text className={`px-2 py-0.5 text-xs rounded-sm text-white ${crypto.isNegative ? 'bg-red-500' : 'bg-green-500'}`}>
                  {crypto.change}
                </Text>
              </View>
            </View>
            {idx < cryptoData.length - 1 && <View className="h-px bg-gray-200 mt-2" />}
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav */}
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

export default AboutScreen;
