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













import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from '@react-navigation/elements';

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
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const renderCheckbox = (checked, onPress, label) => (
        <TouchableOpacity
            onPress={onPress}
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
        >
            <View
                style={{
                    height: 20,
                    width: 20,
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: '#333',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                }}
            >
                {checked && (
                    <View
                        style={{
                            height: 12,
                            width: 12,
                            backgroundColor: 'yellow',
                            borderRadius: 2,
                        }}
                    />
                )}
            </View>
            <Text className='text-[white]'>{label}</Text>
        </TouchableOpacity>
    );

    const increment = (setter, value, step) => setter((parseFloat(value) + step).toFixed(5));
    const decrement = (setter, value, step) => setter((parseFloat(value) - step).toFixed(5));

    return (
        <View className="bg-[#161616] p-4">
            {/* Header Tabs */}
            <View className="flex-row pb-4">
                {['Convert', 'Spot', 'Margin', 'Buy/Sell'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        className='pr-4 py-2'
                    >
                        <Text className={`${selectedTab === tab ? 'text-[#ffffff]' : 'text-[#9c9c9c]'}`}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Pair and 24h Stats */}
            <View className="flex-row justify-between items-center pb-4">
                <View>
                    <Text className="text-[20px] font-semibold text-[yellow]">BTC/USDC</Text>
                    <Text className="text-[10px] text-red-500">-1.37%</Text>
                </View>
                <View className="items-end">
                    <Text className="ml-2 text-lg text-[#ffffff]">•••</Text>
                </View>
            </View>
            <View className='flex-row justify-between'>
                <View>
                    {/* Buy/Sell Toggle */}
                    <View className="flex-row mb-3">
                        {['Buy', 'Sell'].map((type) => (
                            <TouchableOpacity
                                key={type}
                                onPress={() => setSide(type)}
                                className={`flex-1 py-2 rounded-lg ${side === type ? (type === 'Buy' ? 'bg-green-500' : 'bg-red-500') : 'bg-gray-200'
                                    }`}
                            >
                                <Text className={`text-center font-bold ${side === type ? 'text-white' : 'text-black'}`}>
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Order Type Picker */}
                    <View className="bg-gray-100 rounded-md mb-3 p-3 ">
                        <Picker selectedValue={orderType} onValueChange={setOrderType} className='outline-none'>
                            <Picker.Item label="Limit" value="Limit" />
                            <Picker.Item label="Market" value="Market" />
                            <Picker.Item label="Stop Limit" value="StopLimit" />
                        </Picker>
                    </View>

                    {/* Price Input */}
                    <View className="mb-3 outline-none border-none bg-gray-100 rounded-lg">
                        <View className="flex-row items-center justify-between border rounded-md px-2 py-1 outline-none border-none">
                            <TouchableOpacity onPress={() => decrement(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">-</Text>
                            </TouchableOpacity>

                            <View>
                                <TextInput
                                    value={'price (USDC)'}
                                    className='outline-none disable text-center text-[8px] text-[gray]'
                                />
                                <TextInput
                                    keyboardType="numeric"
                                    value={price.toString()}
                                    onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                                    className="text-center outline-none text-black"
                                />
                            </View>

                            <TouchableOpacity onPress={() => increment(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Amount Input */}
                    <View className="mb-3 outline-none border-none bg-gray-100 rounded-lg">
                        <View className="flex-row items-center justify-between border rounded-md px-2 py-1 outline-none border-none">
                            <TouchableOpacity onPress={() => decrement(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">-</Text>
                            </TouchableOpacity>

                            <View>
                                <TextInput
                                    value={'Amount (BTC)'}
                                    className='outline-none disable text-center text-[8px] text-[gray]'
                                />
                                <TextInput
                                    keyboardType="numeric"
                                    value={price.toString()}
                                    onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                                    className="text-center outline-none text-black"
                                />
                            </View>

                            <TouchableOpacity onPress={() => increment(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* total Input */}
                    <View className="mb-3 outline-none border-none bg-gray-100 rounded-lg">
                        <View className="flex-row items-center justify-between border rounded-md px-2 py-1 outline-none border-none">
                            <TouchableOpacity onPress={() => decrement(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">-</Text>
                            </TouchableOpacity>

                            <View>
                                <TextInput
                                    value={'Total (USDC)'}
                                    className='outline-none disable text-center text-[8px] text-[gray]'
                                />
                                <TextInput
                                    keyboardType="numeric"
                                    value={price.toString()}
                                    onChangeText={(text) => setPrice(parseFloat(text) || 0)}
                                    className="text-center outline-none text-black"
                                />
                            </View>

                            <TouchableOpacity onPress={() => increment(setPrice, price, 0.01)} className="px-2">
                                <Text className="text-lg">+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* two checkboxes */}
                    <View className='pb-2'>
                        {renderCheckbox(checked1, () => setChecked1(!checked1), 'TP/SL')}
                        {renderCheckbox(checked2, () => setChecked2(!checked2), 'Iceberg')}
                    </View>

                    {/* Balance */}
                    <View className="mb-3 flex-row justify-between items-center">
                        <View>
                            <Text className="text-[white] pb-1">Available</Text>
                            <Text className="text-[white] pb-1">Max {side}</Text>
                            <Text className="text-[white] pb-1">Est. Fee</Text>
                        </View>
                        <View>
                            <Text className="text-[yellow] pb-1 text-right">0 USDC</Text>
                            <Text className="text-[yellow] pb-1 text-right">0 BTC</Text>
                            <Text className="text-[yellow] pb-1 text-right">0.00000003 BTC</Text>
                        </View>
                    </View>

                    {/* Buy/Sell Button */}
                    <TouchableOpacity
                        className={`py-2 rounded-md items-center mb-4 ${side === 'Buy' ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                        <Text className="text-[white] font-bold text-lg">{side} BTC</Text>
                    </TouchableOpacity>
                </View>

                {/* Order Book */}
                <View className='flex-col justify-between'>
                    {[...mockSellOrders].reverse().map((item, index) => (
                        <View key={`sell-${index}`} className="flex-row justify-between gap-4">
                            <Text className="text-red-500 text-xs">{item.price}</Text>
                            <Text className="text-white text-xs">{item.amount}</Text>
                        </View>
                    ))}
                    <View className="py-2 items-center">
                        <Text className="text-sm font-semibold text-green-500">106,166.00</Text>
                    </View>
                    {mockBuyOrders.map((item, index) => (
                        <View key={`buy-${index}`} className="flex-row justify-between">
                            <Text className="text-green-500 text-xs">{item.price}</Text>
                            <Text className="text-white text-xs">{item.amount}</Text>
                        </View>
                    ))}
                    <View className="bg-gray-100 rounded-md p-1">
                        <Picker selectedValue={orderType} onValueChange={setOrderType} className='outline-none text-[10px]'>
                            <Picker.Item label="0.01" value="Limit" />
                            <Picker.Item label="Market" value="Market" />
                            <Picker.Item label="Stop Limit" value="StopLimit" />
                        </Picker>
                    </View>
                </View>
            </View>
            <View className="flex-row pt-4 border-b border-[#e9e9e9]">
                {['Open orders(0)', 'Holdings(0)'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setSelectedTab(tab)}
                        className='pr-4 py-2'
                    >
                        <Text className={`${selectedTab === tab ? 'text-[#ffffff]' : 'text-[#9c9c9c]'}`}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View className='py-8 flex-col gap-2 justify-center items-center'>
                <Text className='text-center text-[18px] font-semibold pb-2 text-[#ffffff]'>
                    Available funds: 0.003
                </Text>
                <Text className='text-center text-[#ffffff]'>
                    Transfer funds to spot wallet
                </Text>
                <TouchableOpacity
                        className='px-4 py-2 w-fit text-center bg-[#817400] rounded-lg'
                    >
                        <Text className='text-center text-[white]'>Increase balance</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
