import { Platform, View, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { twForm } from '@/styles/tw-form';

export default function DateFilter({ item }) {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  if (Platform.OS === "web") {
    return (
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        className="flex-1 rounded-xl  border-gray-300 bg-white px-4 py-3 text-gray-900"
      />
    );
  }

  return (
    <View className={twForm.view}>
      <Text className={twForm.label}>{item.label} </Text>
      <Pressable onPress={() => setShow(true)} className={`${twForm.input} ${twForm.date}`}>
        <Text className={twForm.label}>{date ? date.toLocaleDateString() : item.placeholder}</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}
    </View>
  );
}