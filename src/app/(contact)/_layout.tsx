import { Stack } from "expo-router";

export default function ContactLayout() {
  return (
    <Stack>
      <Stack.Screen name="view" options={{ title: "Ver contacto" }} />
      <Stack.Screen name="edit" options={{ title: "Editar contacto" }} />
    </Stack>
  );
}