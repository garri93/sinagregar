import {useState } from "react";

import {View, Text, Modal, Pressable, FlatList,} from "react-native";

export default function PhoneInput({countryList, selectedCountry, setSelectedCountry,}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
        }}>
        <Text>
          {selectedCountry.flag} {selectedCountry.callingCode}
        </Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide">
        <Pressable
          onPress={() => {
            setModalVisible(false);
          }}
          className=" w-9/1 border-b-2 px-4 py-2 font-bold  hover:bg-red-400 ">
          <Text className="text-center">Cerrar</Text>
        </Pressable>
        <View
          style={{
            flex: 1,
            padding: 20,
            paddingTop: 60,
          }}>
          <FlatList
            data={countryList}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setSelectedCountry(item);
                    setModalVisible(false);
                }}
                style={{
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                }}>
                <Text style={{ fontSize: 18 }}>
                  {item.flag} {item.name} {item.callingCode}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}