import { Stack } from "expo-router";
import '../../global.css';
import { ImageBackground } from "react-native";

export default function Layout() {
  return (
      <Stack>
        <Stack.Screen name ="(tabs)" options={{headerShown: false}}/>
      </Stack>
  );
}