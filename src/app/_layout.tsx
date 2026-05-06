import { Stack } from "expo-router";
import '../../global.css';
import { ImageBackground } from "react-native";

export default function Layout() {
  return (
    <ImageBackground
      source={require('../../assets/fondo.png')}
      resizeMode="cover"
      style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </ImageBackground>
  );
}