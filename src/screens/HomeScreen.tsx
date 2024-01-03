import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationProp } from "@react-navigation/native";

const COLORS = ["#F2023E", "#FF680A", "#21A8FD", "#124DE2", "#759438"];

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  console.log(COLORS[Math.floor(Math.random() * 5)]);
  return (
    <View style={styles.container}>
      <Text>Twitterhop</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
      <Button
        title="2022"
        onPress={() =>
          navigation.navigate("Pages", {
            year: "2022",
            ids: [1],
            color: COLORS[Math.floor(Math.random() * 5)],
          })
        }
      />
      <Button
        title="2021"
        onPress={() =>
          navigation.navigate("Pages", {
            year: "2021",
            ids: [2, 3],
            color: COLORS[Math.floor(Math.random() * 5)],
          })
        }
      />
      <StatusBar style="auto" />
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
