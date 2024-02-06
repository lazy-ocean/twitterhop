import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet, Modal } from "react-native";
import { useFile } from "../utils/contexts/FileContext";

const FilePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { selectFile } = useFile();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Please add your Twitter archive</Text>
        <Text style={styles.text}>You only need to do it once.</Text>
      </View>
      <Modal
        animationType="slide"
        /*      transparent={true} */
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Text style={[styles.text, { textAlign: "left" }]}>
            1. Request your Twitter/X archive beforehand. This might take some
            time (24+hrs).
          </Text>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={[styles.text, { color: "blue", textAlign: "left" }]}>
              Here's how to do it.
            </Text>
          </Pressable>
          <Text style={[styles.text, { textAlign: "left" }]}>
            2. Unpack your twitter archive.
          </Text>
          <Text style={[styles.text, { textAlign: "left" }]}>
            3. Click "Select a file" button below and locate tweets.js file in
            data folder
          </Text>
          <Pressable onPress={selectFile} style={styles.button}>
            <Text style={styles.buttonLabel}>Select a file</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.buttonLabel}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.instructions}>Show me instructions</Text>
      </Pressable>
      <Pressable onPress={selectFile} style={styles.button}>
        <Text style={styles.buttonLabel}>Select a file</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22,
    padding: 30,
    gap: 20,
  },
  container: {
    flexDirection: "column",
    gap: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Raleway_500Medium",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#161411",
    borderRadius: 30,
    borderColor: "#161411",
    borderWidth: 3,
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Raleway_500Medium",
  },
  instructions: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Raleway_300Light",
  },
});

export default FilePicker;
