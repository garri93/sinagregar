import React, { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { renderFilter } from '@/utils/renderFilter';

export default function SearchInput({extraFilters = []}) {
  const [open, setOpen] = useState(false);
  const filters = extraFilters;

  return (
    <View>
      <View className="w-full flex-row gap-2 p-2">
        <TextInput
          placeholder="Nombre o Teléfono"
          placeholderTextColor="#9ca3af"
          keyboardType="phone-pad"
          className=" flex-[9] rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
          /*value={}
      onChangeText={}*/
        />

        <Pressable
          className=" py-3py-3 flex-1 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900"
          onPress={() => setOpen(!open)}>
          <MaterialIcons name="filter-list" size={24} color="black" />
        </Pressable>
      </View>

      {open && (
        <View className="flex-row flex-wrap gap-3 bg-amber-100 p-2">
          {filters.map(renderFilter)}
        </View>
      )}
    </View>
  );
}

