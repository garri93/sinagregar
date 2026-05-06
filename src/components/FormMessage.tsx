import React from "react";
import { Text, View, TextInput, Pressable } from "react-native";

export default function FormMessage() {
  return (
    <View className="flex-12 items-center justify-center px-6">
      <View className="w-full max-w-sm rounded-2xl border border-gray-300 bg-white p-6 shadow">

        <Text className="mb-6 text-center text-2xl font-bold text-gray-900">
          Enviar mensaje
        </Text>

        <View className="mb-4">
          <Text className="mb-2 text-sm font-medium text-gray-700">
            Teléfono
          </Text>

          <TextInput
            placeholder="Teléfono"
            placeholderTextColor="#9ca3af"
            keyboardType="phone-pad"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
          />
        </View>

        <View className="mb-6">
          <Text className="mb-2 text-sm font-medium text-gray-700">
            Mensaje
          </Text>

          <TextInput
            placeholder="Mensaje"
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            className="min-h-32 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
          />
        </View>

        <Pressable className="rounded-lg bg-indigo-500 py-3">
          <Text className="text-center font-semibold text-white">
            Generar mensaje
          </Text>
        </Pressable>

      </View>
    </View>
  );
}