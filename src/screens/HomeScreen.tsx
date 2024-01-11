import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationProp } from "@react-navigation/native";
import { searchTweets } from "../utils/tweetSearch";

const COLORS = ["#F2023E", "#FF680A", "#21A8FD", "#124DE2", "#759438"];

const HomeScreen = ({ navigation }: { navigation: NavigationProp<string> }) => {
  const tweets = searchTweets();
  return (
    <View style={styles.container}>
      <Text>Twitterhop</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
      {Object.keys(tweets).map((year) => (
        <Button
          key={year}
          title={year}
          onPress={() =>
            navigation.navigate("Pages", {
              year,
              content: tweets[year],
              color: COLORS[Math.floor(Math.random() * 5)],
            })
          }
        />
      ))}
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
