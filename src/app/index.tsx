import { View, Text ,TextInput, ImageBackground, Image} from "react-native";
import FormMessage from "@/components/FormMessage";
import {Stack} from "expo-router";


export default function Index() {
    return (
      <ImageBackground
        source={require('../../assets/fondo.png')}
        resizeMode="repeat"
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}>
        <View className="min-h-full bg-white/80">
          <View className="flex  flex-col justify-center  p-6 px-6  lg:px-8">
            <View className="">
              <Image
                source={require('../../assets/logotipo.png')}
                style={{
                  width: 200,
                  height: 200,
                  alignSelf: 'center',
                  marginBottom: 16,
                }}
                resizeMode="contain"
              />
            </View>

            <FormMessage />
          </View>
        </View>
      </ImageBackground>
    );
}
