import React from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useFile } from "../utils/contexts/FileContext";
import FilePicker from "../components/FilePicker";

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  const { data } = useFile();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Twitterhop</Text>
      <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      {data ? (
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
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "PlusJakartaSans_500Medium",
    fontSize: 40,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 15,
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
    backgroundColor: "#face3e",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default HomeScreen;
