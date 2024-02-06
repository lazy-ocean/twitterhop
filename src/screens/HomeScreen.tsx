import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useFile } from "../utils/contexts/FileContext";
import FilePicker from "../components/FilePicker";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  const { data, isLoading } = useFile();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.mainContainer}>
          <View style={styles.introWrapper}>
            <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
            <Text style={styles.header}>Twitterhop</Text>
            {data && !isLoading ? (
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Tweets", {
                    tweets: data,
                  })
                }
              >
                <Text style={styles.label}>Let's go!</Text>
              </Pressable>
            ) : (
              <FilePicker />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: { flex: 1, justifyContent: "center" },
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  header: {
    fontSize: 42,
    fontFamily: "FugazOne_400Regular",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#161411",
    borderRadius: 30,
    borderColor: "#161411",
    borderWidth: 3,
    width: "100%",
  },
  label: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Raleway_500Medium",
  },
  date: {
    fontSize: 20,
    fontFamily: "Raleway_500Medium",
  },
  introWrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    padding: 30,
  },
});

export default HomeScreen;
