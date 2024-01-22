import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useFile } from "../utils/contexts/FileContext";
import FilePicker from "../components/FilePicker";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  const { data, isLoading } = useFile();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    console.log({ isLoading });
    if (!isLoading) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Twitterhop</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
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
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 42,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#db4d2f",
    borderRadius: 15,
    borderColor: "#161411",
    borderWidth: 3,
  },
  label: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  date: {
    fontFamily: "PlusJakartaSans_200ExtraLight",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#9fc875",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "#fbfdfc",
    borderColor: "#161411",
    borderWidth: 3,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 30,
  },
});

export default HomeScreen;
