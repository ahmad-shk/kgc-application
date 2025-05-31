// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch } from 'react-native';

// const CryptoTradeScreen = () => {
//     return (
//         <ScrollView className="flex-1 bg-white p-4">
//             <Link href="/">
//                 <Text className="text-blue-500 px-4 py-2">← Back to Home</Text>
//             </Link>
//             {/* Header */}
//             <View className="flex-row justify-between">
//                 <Text className="text-xl font-bold">BTC/USDC</Text>
//                 <Text className="text-red-500">-1.37%</Text>
//             </View>

//             {/* Tabs */}
//             <View className="flex-row my-4">
//                 <Text className="text-green-600 font-bold mr-6">Buy</Text>
//                 <Text className="text-gray-400">Sell</Text>
//             </View>

//             {/* Limit Text */}
//             <Text className="mb-1 text-sm">Limit</Text>

//             {/* Price Input */}
//             <Text className="text-xs text-gray-600">Price (USDC)</Text>
//             <TextInput
//                 className="border border-gray-300 rounded px-3 py-2 mt-1"
//                 keyboardType="numeric"
//                 value="106166.00"
//             />

//             {/* Amount Input */}
//             <Text className="text-xs mt-4 text-gray-600">Amount (BTC)</Text>
//             <TextInput
//                 className="border border-gray-300 rounded px-3 py-2 mt-1"
//                 keyboardType="numeric"
//                 value="0.00005"
//             />

//             {/* Total Display */}
//             <View className="mt-4 mb-6">
//                 <Text className="text-xs text-gray-600">Total (USDC)</Text>
//                 <View className="bg-gray-100 rounded px-3 py-2 mt-1">
//                     <Text className="text-base">5.3083</Text>
//                 </View>
//             </View>

//             {/* TP/SL and Iceberg */}
//             <View className="flex-row items-center space-x-6 mb-4">
//                 <View className="flex-row items-center space-x-2">
//                     <Switch />
//                     <Text>TP/SL</Text>
//                 </View>
//                 <View className="flex-row items-center space-x-2">
//                     <Switch />
//                     <Text>Iceberg</Text>
//                 </View>
//             </View>

//             {/* Avbl, Max Buy, Fee */}
//             <Text className="text-xs text-gray-500">Avbl: <Text className="text-black">0 USDC</Text></Text>
//             <Text className="text-xs text-gray-500">Max Buy: <Text className="text-black">0 BTC</Text></Text>
//             <Text className="text-xs text-gray-500 mb-6">Est. Fee: <Text className="text-black">0.00000003 BTC</Text></Text>

//             {/* Buy Button */}
//             <TouchableOpacity className="bg-green-600 rounded items-center py-3">
//                 <Text className="text-white font-bold">Buy BTC</Text>
//             </TouchableOpacity>

//             {/* Order Book */}
//             <View className="mt-8">
//                 <Text className="font-bold text-base mb-2">Order Book</Text>

//                 {[
//                     { price: '106,199.98', amount: '0.00010' },
//                     { price: '106,199.76', amount: '0.00026' },
//                     { price: '106,199.74', amount: '0.00100' },
//                 ].map((item, index) => (
//                     <View key={index} className="flex-row justify-between">
//                         <Text className="text-red-500">{item.price}</Text>
//                         <Text>{item.amount}</Text>
//                     </View>
//                 ))}

//                 <Text className="text-green-600 text-center text-lg my-2">106,197.78</Text>

//                 {[
//                     { price: '106,197.77', amount: '1.69176' },
//                     { price: '106,196.13', amount: '0.02657' },
//                 ].map((item, index) => (
//                     <View key={index + 3} className="flex-row justify-between">
//                         <Text className="text-green-600">{item.price}</Text>
//                         <Text>{item.amount}</Text>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     );
// };

// export default CryptoTradeScreen;













import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const mockSellOrders = [
    { price: '106,199.98', amount: '0.00010' },
    { price: '106,199.76', amount: '0.00002' },
    { price: '106,199.44', amount: '0.01996' },
    { price: '106,198.00', amount: '0.04380' },
    { price: '106,197.99', amount: '0.00010' },
    { price: '106,197.79', amount: '0.00015' },
    { price: '106,197.78', amount: '0.44396' },
];

const mockBuyOrders = [
    { price: '106,197.77', amount: '1.69176' },
    { price: '106,197.13', amount: '0.00010' },
    { price: '106,196.12', amount: '0.02657' },
    { price: '106,196.11', amount: '0.01195' },
    { price: '106,196.01', amount: '0.00010' },
    { price: '106,196.00', amount: '0.04380' },
    { price: '106,195.84', amount: '0.03937' },
];

export default function CryptoTradeScreen() {
    const [selectedTab, setSelectedTab] = useState('Spot');
    const [side, setSide] = useState('Buy');
    const [orderType, setOrderType] = useState('Limit');
    const [price, setPrice] = useState(106166.0);
    const [amount, setAmount] = useState(0.00005);

    const increment = (setter, value, step) => setter((parseFloat(value) + step).toFixed(5));
    const decrement = (setter, value, step) => setter((parseFloat(value) - step).toFixed(5));

    return (
        <View className="bg-white p-4">
            {/* Header Tabs */}
            <View className="flex-row">
                {['Convert', 'Spot', 'Margin', 'Buy/Sell'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        className='px-4 py-2'       
                    >
                        <Text className={`${selectedTab === tab ? 'text-[#000000]' : 'text-[#9c9c9c]'}`}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Pair and 24h Stats */}
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-xl font-semibold">BTC/USDC</Text>
                <View className="items-end">
                    <Text className="text-lg font-semibold text-black">106,166.00</Text>
                    <Text className="text-sm text-red-500">-1.37%</Text>
                </View>
            </View>
           <View className='flex-row'>
            <View>
                {/* Buy/Sell Toggle */}
                <View className="flex-row mb-3">
                    {['Buy', 'Sell'].map((type) => (
                        <TouchableOpacity
                            key={type}
                            onPress={() => setSide(type)}
                            className={`flex-1 py-2 mx-1 rounded-full ${side === type ? (type === 'Buy' ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'
                                }`}
                        >
                            <Text className={`text-center font-bold ${side === type ? 'text-white' : 'text-black'}`}>
                                {type}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Order Type Picker */}
                <View className="bg-gray-100 rounded-md mb-3">
                    <Picker selectedValue={orderType} onValueChange={setOrderType}>
                        <Picker.Item label="Limit" value="Limit" />
                        <Picker.Item label="Market" value="Market" />
                        <Picker.Item label="Stop Limit" value="StopLimit" />
                    </Picker>
                </View>

                {/* Price Input */}
                <View className="mb-3">
                    <Text className="text-gray-600 mb-1">Price (USDC)</Text>
                    <View className="flex-row items-center border rounded-md px-2 py-1">
                        <TextInput
                            keyboardType="numeric"
                            value={price.toString()}
                            onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                            className="flex-1 text-black"
                        />
                        <TouchableOpacity onPress={() => decrement(setPrice, price, 0.01)} className="px-2">
                            <Text className="text-lg">-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => increment(setPrice, price, 0.01)} className="px-2">
                            <Text className="text-lg">+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Amount Input */}
                <View className="mb-3">
                    <Text className="text-gray-600 mb-1">Amount (BTC)</Text>
                    <View className="flex-row items-center border rounded-md px-2 py-1">
                        <TextInput
                            keyboardType="numeric"
                            value={amount.toString()}
                            onChangeText={(text) => setAmount(parseFloat(text) || 0)}
                            className="flex-1 text-black"
                        />
                        <TouchableOpacity onPress={() => decrement(setAmount, amount, 0.00001)} className="px-2">
                            <Text className="text-lg">-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => increment(setAmount, amount, 0.00001)} className="px-2">
                            <Text className="text-lg">+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Total */}
                <View className="bg-gray-100 p-3 rounded-md mb-3">
                    <Text className="text-gray-600">Total (USDC)</Text>
                    <Text className="text-black font-bold">{(price * amount).toFixed(2)}</Text>
                </View>

                {/* Balance */}
                <View className="mb-3">
                    <Text className="text-gray-500">Available: 0 USDC</Text>
                    <Text className="text-gray-500">Max {side}: 0 BTC</Text>
                    <Text className="text-gray-500">Est. Fee: 0.00000003 BTC</Text>
                </View>

                {/* Buy/Sell Button */}
                <TouchableOpacity
                    className={`py-4 rounded-md items-center mb-4 ${side === 'Buy' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    <Text className="text-white font-bold text-lg">{side} BTC</Text>
                </TouchableOpacity>
            </View>

            {/* Order Book */}
            <View>
                {[...mockSellOrders].reverse().map((item, index) => (
                    <View key={`sell-${index}`} className="flex-row justify-between">
                        <Text className="text-red-500 text-xs">{item.price}</Text>
                        <Text className="text-gray-700 text-xs">{item.amount}</Text>
                    </View>
                ))}
                <View className="my-2 border-t border-b py-1 items-center">
                    <Text className="text-sm font-semibold text-black">106,166.00</Text>
                </View>
                {mockBuyOrders.map((item, index) => (
                    <View key={`buy-${index}`} className="flex-row justify-between">
                        <Text className="text-green-500 text-xs">{item.price}</Text>
                        <Text className="text-gray-700 text-xs">{item.amount}</Text>
                    </View>
                ))}
            </View>
        </View>
        </View>
    );
}
