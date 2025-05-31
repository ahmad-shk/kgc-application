import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';

const CryptoTradeScreen = () => {
    return (
        <ScrollView className="flex-1 bg-white p-4">
            <Link href="/">
                <Text className="text-blue-500 px-4 py-2">← Back to Home</Text>
            </Link>
            {/* Header */}
            <View className="flex-row justify-between">
                <Text className="text-xl font-bold">BTC/USDC</Text>
                <Text className="text-red-500">-1.37%</Text>
            </View>

            {/* Tabs */}
            <View className="flex-row my-4">
                <Text className="text-green-600 font-bold mr-6">Buy</Text>
                <Text className="text-gray-400">Sell</Text>
            </View>

            {/* Limit Text */}
            <Text className="mb-1 text-sm">Limit</Text>

            {/* Price Input */}
            <Text className="text-xs text-gray-600">Price (USDC)</Text>
            <TextInput
                className="border border-gray-300 rounded px-3 py-2 mt-1"
                keyboardType="numeric"
                value="106166.00"
            />

            {/* Amount Input */}
            <Text className="text-xs mt-4 text-gray-600">Amount (BTC)</Text>
            <TextInput
                className="border border-gray-300 rounded px-3 py-2 mt-1"
                keyboardType="numeric"
                value="0.00005"
            />

            {/* Total Display */}
            <View className="mt-4 mb-6">
                <Text className="text-xs text-gray-600">Total (USDC)</Text>
                <View className="bg-gray-100 rounded px-3 py-2 mt-1">
                    <Text className="text-base">5.3083</Text>
                </View>
            </View>

            {/* TP/SL and Iceberg */}
            <View className="flex-row items-center space-x-6 mb-4">
                <View className="flex-row items-center space-x-2">
                    <Switch />
                    <Text>TP/SL</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <Switch />
                    <Text>Iceberg</Text>
                </View>
            </View>

            {/* Avbl, Max Buy, Fee */}
            <Text className="text-xs text-gray-500">Avbl: <Text className="text-black">0 USDC</Text></Text>
            <Text className="text-xs text-gray-500">Max Buy: <Text className="text-black">0 BTC</Text></Text>
            <Text className="text-xs text-gray-500 mb-6">Est. Fee: <Text className="text-black">0.00000003 BTC</Text></Text>

            {/* Buy Button */}
            <TouchableOpacity className="bg-green-600 rounded items-center py-3">
                <Text className="text-white font-bold">Buy BTC</Text>
            </TouchableOpacity>

            {/* Order Book */}
            <View className="mt-8">
                <Text className="font-bold text-base mb-2">Order Book</Text>

                {[
                    { price: '106,199.98', amount: '0.00010' },
                    { price: '106,199.76', amount: '0.00026' },
                    { price: '106,199.74', amount: '0.00100' },
                ].map((item, index) => (
                    <View key={index} className="flex-row justify-between">
                        <Text className="text-red-500">{item.price}</Text>
                        <Text>{item.amount}</Text>
                    </View>
                ))}

                <Text className="text-green-600 text-center text-lg my-2">106,197.78</Text>

                {[
                    { price: '106,197.77', amount: '1.69176' },
                    { price: '106,196.13', amount: '0.02657' },
                ].map((item, index) => (
                    <View key={index + 3} className="flex-row justify-between">
                        <Text className="text-green-600">{item.price}</Text>
                        <Text>{item.amount}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default CryptoTradeScreen;
