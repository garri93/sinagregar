import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: (color) => <FontAwesome name="home" size={24} />,
        }}
      />

      <Tabs.Screen
        name="record"
        options={{
          tabBarLabel: 'Historial',
          tabBarIcon: (color) => <FontAwesome name="history" size={24} />,
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          tabBarLabel: 'Contactos',
          tabBarIcon: (color) => <FontAwesome6 name="contact-card" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="templates"
        options={{
          tabBarLabel: 'Plantillas',
          tabBarIcon: (color) => <Foundation name="clipboard-notes" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="campaigns"
        options={{
          tabBarLabel: 'Campañas',
          tabBarIcon: (color) => <AntDesign name="schedule" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}