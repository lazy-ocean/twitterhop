import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { TweetsPager } from "./src/screens/Tweets";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_200ExtraLight,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_200ExtraLight,
} from "@expo-google-fonts/plus-jakarta-sans";
import { FileProvider } from "./src/utils/contexts/FileContext";
import { NavigatorScreenParams } from "@react-navigation/native";

type Stack = {
  Tweets: NavigatorScreenParams<{
    year: number;
    content: any;
    color: string;
  }>;
  Home: undefined;
};

const Stack = createNativeStackNavigator<Stack>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_200ExtraLight,
    Inter_300Light,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_200ExtraLight,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <FileProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Twitterhop" }}
          />
          <Stack.Screen name="Tweets" component={TweetsPager} />
        </Stack.Navigator>
      </NavigationContainer>
    </FileProvider>
  );
}
