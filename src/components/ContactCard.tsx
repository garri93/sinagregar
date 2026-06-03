import { View, Text, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

export default function ContactCard() {
  const router = useRouter();

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
        <Pressable onPress={() => router.push('/(contact)/ClientDetails')}>
          <Entypo name="eye" size={18} color="black" />
        </Pressable>
        <Pressable className="mr-1" onPress={() => router.push('/(contact)/EditClient')}>
          <Entypo name="edit" size={18} color="black" />
        </Pressable>
        <Pressable onPress={() => router.push('/(tabs)/')}>
          <Entypo name="message" size={18} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
