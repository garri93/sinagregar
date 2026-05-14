import { Platform, View, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';

export default function ContactCard() {
  return (
    <View className="flex-row justify-around border-b-2 bg-white p-5">
      <View>
        <Text>Carlos</Text>
      </View>
      <View className="flex-row">
        <Text className="mr-1">34</Text>
        <Text>65852541</Text>
      </View>
      <View className="flex-row">
        <Text>
          <Entypo name="eye" size={18} color="black" />
        </Text>
        <Text className="mr-1">
          <Entypo name="edit" size={18} color="black" />
        </Text>
        <Text>
          <Entypo name="message" size={18} color="black" />
        </Text>
      </View>
    </View>
  );
}