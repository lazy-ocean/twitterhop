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
        Object.keys(data).map((year) => (
          <Button
            key={year}
            title={year}
            onPress={() =>
              navigation.navigate("Tweets", {
                year,
                content: data[year],
                color: COLORS[Math.floor(Math.random() * 5)],
              })
            }
          />
        ))
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
