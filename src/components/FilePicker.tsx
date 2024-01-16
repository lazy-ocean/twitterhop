import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { useFile } from "../utils/contexts/FileContext";

const FilePicker = () => {
  const { selectFile } = useFile();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please add your Twitter archive</Text>
      <Text style={styles.text}>You only need to do it once.</Text>
      <Text style={styles.instructions}>Go to instructions</Text>
      <Pressable onPress={selectFile} style={styles.button}>
        <Text style={styles.buttonLabel}>Select a file</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 40,
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonLabel: {
    color: "white",
  },
  instructions: {
    color: "#7d6e00",
  },
});

export default FilePicker;
