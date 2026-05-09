import React, {useState} from "react";
import { Text, View, TextInput, Pressable, Linking } from 'react-native';

import PhoneInput from "@/components/PhoneInput";

import { SendMessage } from '@/services/message.service';
import { countryList, defaultCountry } from '@/utils/countries.utils';

export default function FormMessage() {

  const [phone, setPhone] = useState('');
  const [telegramUser, setTelegramUser] = useState('');
  const [message, setMessage] = useState("");
  const [platform, setPlatform] = useState('whatsapp');

  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);


  return (
    <View className="flex-12 items-center justify-center px-6">
      <View className="w-full max-w-sm rounded-2xl border border-gray-300 bg-white p-6 shadow">
        <Text className="mb-6 text-center text-2xl font-bold text-gray-900">Enviar mensaje</Text>

        {platform === 'whatsapp' && (
          <View className="mb-4">
            <Text className="mb-2 text-sm font-medium text-gray-700">Teléfono</Text>

            <View className="flex-row items-center gap-2">
              <View className="w-30">
                <PhoneInput
                  countryList={countryList}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                />
              </View>

              <TextInput
                placeholder="Teléfono"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>
        )}

        {platform === 'telegram' && (
          <View className="mb-6">
            <Text className="mb-2 text-sm font-medium text-gray-700">Nombre Usuario</Text>
            <View className="flex-row items-center gap-2">
              <TextInput
                placeholder="Nombre Usuario"
                placeholderTextColor="#9ca3af"
                className="flex-1  rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
                value={telegramUser}
                onChangeText={setTelegramUser}
              />
            </View>
          </View>
        )}

        <View className="mb-6">
          <Text className="mb-2 text-sm font-medium text-gray-700">Mensaje</Text>

          <TextInput
            placeholder="Mensaje"
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="min-h-32 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
            value={message}
            onChangeText={setMessage}
          />
        </View>

        <View className="mb-4 flex-row items-center gap-3">
          <Pressable
            onPress={() => setPlatform('whatsapp')}
            className={`flex-1 rounded-xl p-4 ${
              platform === 'whatsapp' ? 'bg-green-500' : 'bg-gray-200'
            }`}>
            <Text className="text-center">WhatsApp</Text>
          </Pressable>

          <Pressable
            onPress={() => setPlatform('telegram')}
            className={`flex-1 rounded-xl p-4 ${
              platform === 'telegram' ? 'bg-blue-500' : 'bg-gray-200'
            }`}>
            <Text className="text-center">Telegram</Text>
          </Pressable>
        </View>

        <Pressable
          className="rounded-lg bg-indigo-500 py-3"
          onPress={() =>
            SendMessage({
              platform,
              phone,
              message,
              callingCode: selectedCountry.callingCode,
              countryCode: selectedCountry.code,
              telegramUser,
            })
          }>
          <Text className="text-center font-semibold text-white">Generar mensaje</Text>
        </Pressable>
      </View>
    </View>
  );
}