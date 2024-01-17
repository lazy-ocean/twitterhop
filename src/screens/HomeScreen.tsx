import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useFile } from "../utils/contexts/FileContext";
import FilePicker from "../components/FilePicker";

const COLORS = ["#F2023E", "#FF680A", "#21A8FD", "#124DE2", "#759438"];

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  const { data } = useFile();

  return (
    <View style={styles.container}>
      <Text>Twitterhop</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
      {data ? (
        <Button
          title={"go to tweets"}
          onPress={() =>
            navigation.navigate("Tweets", {
              tweets: data,
            })
          }
        />
      ) : (
        <FilePicker />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#face3e",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
