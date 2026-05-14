import { View, Text, TextInput, Pressable, Switch } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import DateFilter from '@/components/DateFilter';
import {twForm} from '@/styles/tw-form';

export function renderFilter(item: any) {
  switch (item.type) {
    case 'text':
      return (
        <View className={twForm.view}>
          <Text className={twForm.label}>{item.label}</Text>
          <TextInput key={item.key} placeholder={item.placeholder} className={twForm.input} />
        </View>
      );

    case 'number':
      return (
        <View className={twForm.view} key={item.key}>
          <Text className={twForm.label}>{item.label}</Text>
          <TextInput
            key={item.key}
            placeholder={item.placeholder}
            keyboardType="numeric"
            className={twForm.input}
          />
        </View>
      );

    case 'select':
      return (
        <View className={twForm.view} key={item.key}>
          <Text className={twForm.label}>{item.label}</Text>
          <View  className={twForm.picker}>
            <Picker>
              {item.options.map((option: string) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
        </View>
      );

    case 'switch':
      return (
        <View
          key={item.key}
          className="flex-row items-center justify-between rounded-xl border px-3 py-2">
          <Text className={twForm.label}>{item.label}</Text>

          <Switch />
        </View>
      );
    case 'date':
      return <DateFilter key={item.key} item={item} />;
    default:
      return null;
  }
}
