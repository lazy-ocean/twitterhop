import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { TweetsPager } from "./src/screens/Tweets";
import {
  useFonts,
  Raleway_300Light,
  Raleway_500Medium,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
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
    Raleway_300Light,
    Raleway_500Medium,
    Raleway_600SemiBold,
    FugazOne_400Regular,
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
