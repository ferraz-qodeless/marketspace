import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";

import "./global.css";
import { Routes } from "src/routes";
import { Loading } from "@components/Loading";

export function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </View>
  );
}
