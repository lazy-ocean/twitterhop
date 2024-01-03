import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Pages from "./src/screens/Pages";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_200ExtraLight,
  Inter_300Light,
} from "@expo-google-fonts/inter";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_200ExtraLight,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Twitterhop" }}
        />
        <Stack.Screen name="Pages" component={Pages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
