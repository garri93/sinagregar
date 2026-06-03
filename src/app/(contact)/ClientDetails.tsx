import { View, Text, Pressable, ScrollView, Linking } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

// TODO: recibir params con useLocalSearchParams()

export default function ClientDetails() {
  const router = useRouter();

  const acciones = [
    {
      label: "Correo",
      icon: <Entypo name="message" size={24} color="white" />,
      action: () => router.push("/(tabs)/"),
    },
    {
      label: "whatsapp",
      icon: <FontAwesome name="whatsapp" size={24} color="white" />,
      action: () => Linking.openURL("whatsapp://send?phone=+34658525410"),
    },
    {
      label: "telegram",
      icon: <FontAwesome name="telegram" size={24} color="white" />,
      action: () => Linking.openURL("tg://resolve?domain=nombreusuario"),
    },
    {
      label: "llamar",
      icon: <Entypo name="phone" size={24} color="white" />,
      action: () => Linking.openURL("tel:+34658525410"),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Avatar + nombre */}
      <View className="items-center pt-8 pb-6 bg-gray-100">
        <Text className="text-2xl font-semibold text-black">Pepito los palotes</Text>
        <Text className="text-sm text-gray-500 mt-0.5">Empresa</Text>
      </View>

      {/* Botones acción rápida */}
      <View className="flex-row justify-center gap-3 px-5 pb-6 flex-wrap">
        {acciones.map((btn) => (
          <Pressable
            key={btn.label}
            onPress={btn.action}
            className="items-center"
          >
            <View className="w-14 h-14 rounded-2xl bg-blue-500 items-center justify-center mb-1">
              {btn.icon}
            </View>
            <Text className="text-xs text-blue-500 font-medium">{btn.label}</Text>
          </Pressable>
        ))}
      </View>

      {/* Teléfono / WhatsApp / Telegram */}
      <View className="mx-4 mb-6 rounded-xl overflow-hidden bg-white">
        <View className="px-4 py-3 border-b border-gray-200">
          <Text className="text-xs text-gray-500 mb-0.5">móvil</Text>
          <Text className="text-blue-500 text-base">+34 658 525 41</Text>
        </View>
        <View className="px-4 py-3 border-b border-gray-200">
          <Text className="text-xs text-gray-500 mb-0.5">WhatsApp</Text>
          <Text className="text-blue-500 text-base">+34 658 525 41</Text>
        </View>
        <View className="px-4 py-3">
          <Text className="text-xs text-gray-500 mb-0.5">Telegram</Text>
          <Text className="text-blue-500 text-base">@nombreusuario</Text>
        </View>
      </View>

      {/* Correo */}
      <View className="mx-4 mb-6 rounded-xl overflow-hidden bg-white">
        <View className="px-4 py-3">
          <Text className="text-xs text-gray-500 mb-0.5">correo</Text>
          <Text className="text-blue-500 text-base">correo@ejemplo.com</Text>
        </View>
      </View>

      {/* Fechas */}
      <View className="mx-4 mb-6 rounded-xl overflow-hidden bg-white">
        <View className="px-4 py-3 border-b border-gray-200">
          <Text className="text-xs text-gray-500 mb-0.5">Fecha de alta</Text>
          <Text className="text-black text-base">28 may 2026</Text>
        </View>
        <View className="px-4 py-3 border-b border-gray-200">
          <Text className="text-xs text-gray-500 mb-0.5">Última modificación</Text>
          <Text className="text-black text-base">28 may 2026</Text>
        </View>
        <View className="px-4 py-3">
          <Text className="text-xs text-gray-500 mb-0.5">Último mensaje</Text>
          <Text className="text-black text-base">28 may 2026</Text>
        </View>
      </View>

      {/* Observaciones */}
      <View className="mx-4 mb-6 rounded-xl overflow-hidden bg-white">
        <View className="px-4 py-3">
          <Text className="text-xs text-gray-500 mb-1">Observaciones</Text>
          <Text className="text-black text-base leading-5">
            Notas sobre el contacto...
          </Text>
        </View>
      </View>

      {/* Historial y Campañas */}
      <View className="mx-4 mb-6 rounded-xl overflow-hidden bg-white">
        <Pressable
          className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200"
          onPress={() => router.push("/(tabs)/record")}
        >
          <Text className="text-blue-500 text-base">Historial de mensajes</Text>
          <Text className="text-gray-400 text-lg">›</Text>
        </Pressable>
        <Pressable
          className="flex-row items-center justify-between px-4 py-3"
          onPress={() => router.push("/(tabs)/campaigns")}
        >
          <Text className="text-blue-500 text-base">Campañas</Text>
          <Text className="text-gray-400 text-lg">›</Text>
        </Pressable>
      </View>

      {/* Editar */}
      <View className="mx-4 mb-3 rounded-xl overflow-hidden bg-white">
        <Pressable className="px-4 py-3 items-center"
                   onPress={() => router.push("/(contact)/EditClient")}>
          <Text className="text-blue-500 text-base">Editar contacto</Text>
        </Pressable>
      </View>
      {/* Eliminar */}
      <View className="mx-4 mb-10 rounded-xl overflow-hidden bg-white">
        <Pressable className="px-4 py-3 items-center">
          <Text className="text-red-500 text-base">Eliminar contacto</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}
