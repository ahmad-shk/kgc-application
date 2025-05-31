import React from "react";
import {View,Text,Modal,FlatList,Pressable,TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Optional: for close icon

type CryptoItem = {
  name: string;
  pair: string;
  leverage: string;
  label: string;
  volume: string;
  price: string;
  change: string;
  changeColor: string;
};

const cryptoData: CryptoItem[] = [{name:"BTC",pair:"USDT",leverage:"10x",label:"Price Protection",volume:"Vol 1.90B",price:"103396.97",change:"-1.86%",changeColor:"text-red-500"},{name:"1INCH",pair:"USDT",leverage:"5x",label:"",volume:"Vol 2.72M",price:"0.2023",change:"-8.79%",changeColor:"text-red-500"},{name:"AAVE",pair:"USDT",leverage:"5x",label:"",volume:"Vol 52.76M",price:"250.20",change:"+0.40%",changeColor:"text-green-500"},{name:"BTC",pair:"USDT",leverage:"10x",label:"Price Protection",volume:"Vol 1.90B",price:"103396.97",change:"-1.86%",changeColor:"text-red-500"},{name:"1INCH",pair:"USDT",leverage:"5x",label:"",volume:"Vol 2.72M",price:"0.2023",change:"-8.79%",changeColor:"text-red-500"},{name:"AAVE",pair:"USDT",leverage:"5x",label:"",volume:"Vol 52.76M",price:"250.20",change:"+0.40%",changeColor:"text-green-500"},{name:"BTC",pair:"USDT",leverage:"10x",label:"Price Protection",volume:"Vol 1.90B",price:"103396.97",change:"-1.86%",changeColor:"text-red-500"},{name:"1INCH",pair:"USDT",leverage:"5x",label:"",volume:"Vol 2.72M",price:"0.2023",change:"-8.79%",changeColor:"text-red-500"},{name:"AAVE",pair:"USDT",leverage:"5x",label:"",volume:"Vol 52.76M",price:"250.20",change:"+0.40%",changeColor:"text-green-500"}];


interface Props {
  visible: boolean;
  onClose: () => void;
}

const CryptoMarketPopup: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View className="flex-1 justify-end bg-black/40">
        <View className="bg-white rounded-t-2xl p-4 h-1/2">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold text-gray-800">USDT Market</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* List Header */}
          <View className="flex-row justify-between px-1 pb-2 border-b border-gray-300">
            <Text className="text-gray-500 text-xs w-2/3">Name / Vol</Text>
            <Text className="text-gray-500 text-xs w-1/3 text-right">Last Price / 24h</Text>
          </View>

          {/* Crypto List */}
          <FlatList
            data={cryptoData}
            keyExtractor={(item, index) => item.name + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="flex-row justify-between items-center py-2 px-1 border-b border-gray-100">
                {/* Left */}
                <View className="w-2/3">
                  <View className="flex-row items-center flex-wrap space-x-1">
                    <Text className="text-sm font-bold text-gray-800">{item.name}</Text>
                    <Text className="text-sm text-gray-500">/{item.pair}</Text>
                    <Text className="text-[10px] text-gray-500">{item.leverage}</Text>
                    {item.label ? (
                      <View className="bg-yellow-100 px-1 py-[1px] rounded-sm">
                        <Text className="text-[10px] text-yellow-600">{item.label}</Text>
                      </View>
                    ) : null}
                  </View>
                  <Text className="text-[11px] text-gray-400 mt-1">{item.volume}</Text>
                </View>

                {/* Right */}
                <View className="w-1/3 items-end">
                  <Text className="text-sm font-semibold text-gray-800">{item.price}</Text>
                  <Text className={`text-sm font-semibold ${item.changeColor}`}>{item.change}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CryptoMarketPopup;
