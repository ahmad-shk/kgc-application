import React from 'react';
import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native';

// Define a type for an order entry
type OrderEntry = {
  price: string;
  amount: string;
};

// Define the shape of the whole order book
type OrderBookData = {
  bid: OrderEntry[];
  ask: OrderEntry[];
};

const orderBookData: OrderBookData = {
  bid: [
    { price: '0.00001122', amount: '10,674,614,393' },
    { price: '0.00001121', amount: '29,674,037,630' },
    { price: '0.00001120', amount: '26,666,595,259' },
    { price: '0.00001119', amount: '20,736,160,997' },
    { price: '0.00001118', amount: '16,308,553,361' },
    { price: '0.00001122', amount: '10,674,614,393' },
    { price: '0.00001121', amount: '29,674,037,630' },
    { price: '0.00001120', amount: '26,666,595,259' },
    { price: '0.00001119', amount: '20,736,160,997' },
    { price: '0.00001118', amount: '16,308,553,361' },
  ],
  ask: [
    { price: '0.00001123', amount: '469,134,170' },
    { price: '0.00001124', amount: '14,374,200,293' },
    { price: '0.00001125', amount: '23,147,389,563' },
    { price: '0.00001126', amount: '21,791,408,453' },
    { price: '0.00001127', amount: '8,488,129,186' },
    { price: '0.00001123', amount: '469,134,170' },
    { price: '0.00001124', amount: '14,374,200,293' },
    { price: '0.00001125', amount: '23,147,389,563' },
    { price: '0.00001126', amount: '21,791,408,453' },
    { price: '0.00001127', amount: '8,488,129,186' },
  ]
};

const OrderBook = () => {
  const maxRows = Math.max(orderBookData.bid.length, orderBookData.ask.length);

  const totalBid = orderBookData.bid.reduce(
    (sum: number, item: OrderEntry) => sum + Number(item.amount.replace(/,/g, '')),
    0
  );

  const totalAsk = orderBookData.ask.reduce(
    (sum: number, item: OrderEntry) => sum + Number(item.amount.replace(/,/g, '')),
    0
  );

  const bidPercent = Math.round((totalBid / (totalBid + totalAsk)) * 100);
  const askPercent = 100 - bidPercent;

  const screenWidth = Dimensions.get('window').width;
  const sideWidthClass = screenWidth > 400 ? 'w-[45%]' : 'w-[48%]';

  return (
    <View className="flex-1 bg-[#161616] p-4">
      <View className="flex-row mb-2">
        <Pressable className="mr-4 border-b-2 border-white pb-1">
          <Text className="text-white font-bold">Order Book</Text>
        </Pressable>
        <Pressable>
          <Text className="text-gray-400 font-bold">Trades</Text>
        </Pressable>
      </View>

      <View className="flex-row items-center mb-4">
        <Text className="text-green-400 text-xs mr-2">{bidPercent}%</Text>
        <View className="flex-1 h-2 rounded bg-gray-700 overflow-hidden relative">
          <View style={{ width: `${bidPercent}%` }} className="h-full bg-green-500" />
          <View style={{ width: `${askPercent}%` }} className="h-full bg-red-500 absolute right-0 top-0" />
        </View>
        <Text className="text-red-400 text-xs ml-2">{askPercent}%</Text>
      </View>

      <View className="flex-row justify-between mb-2">
        <View className={`${sideWidthClass} flex-row justify-between`}>
          <Text className="font-bold text-green-400 text-sm">Bid</Text>
        </View>
        <View className={`${sideWidthClass} flex-row justify-between`}>
          <Text className="font-bold text-red-400 text-sm">Ask</Text>
        </View>
      </View>

      <ScrollView>
        {[...Array(maxRows)].map((_, idx) => {
          const bid = orderBookData.bid[idx];
          const ask = orderBookData.ask[idx];

          return (
            <View key={idx} className="flex-row justify-between py-1">
              <View className={`${sideWidthClass} flex-row justify-between`}>
                <Text className="text-green-500 text-xs" numberOfLines={1} ellipsizeMode="tail">
                  {bid ? bid.amount : '--'}
                </Text>
                <Text className="text-green-500 text-xs" numberOfLines={1} ellipsizeMode="tail">
                  {bid ? bid.price : '--'}
                </Text>
              </View>

              <View className={`${sideWidthClass} flex-row justify-between`}>
                <Text className="text-red-500 text-xs" numberOfLines={1} ellipsizeMode="tail">
                  {ask ? ask.amount : '--'}
                </Text>
                <Text className="text-red-500 text-xs" numberOfLines={1} ellipsizeMode="tail">
                  {ask ? ask.price : '--'}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default OrderBook;
