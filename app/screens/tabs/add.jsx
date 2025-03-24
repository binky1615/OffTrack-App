import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

export default function NewDiaryEntry() {
  const [formData, setFormData] = useState({
    location: "",
    duration: "",
    entry: "",
    country: "Netherlands",
    image: null,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, image: result.assets[0].uri });
    }
  };

  const handleSubmit = () => {
    console.log("Temporary saved data:", formData);
    // You can send formData to an API or store it locally if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>📚 New diary entry</Text>

        <Text style={styles.label}>Location of vacation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={formData.location}
          onChangeText={(text) => handleInputChange("location", text)}
        />

        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={formData.country}
          onValueChange={(itemValue) => handleInputChange("country", itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Netherlands" value="Netherlands" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Italy" value="Italy" />
          <Picker.Item label="Spain" value="Spain" />
        </Picker>

        <Text style={styles.label}>Banner image</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {formData.image ? <Image source={{ uri: formData.image }} style={styles.image} /> : <Text style={styles.plus}>+</Text>}
        </TouchableOpacity>

        <Text style={styles.label}>Duration</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter duration"
          value={formData.duration}
          onChangeText={(text) => handleInputChange("duration", text)}
        />

        <Text style={styles.label}>Diary entry</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write about your trip..."
          value={formData.entry}
          onChangeText={(text) => handleInputChange("entry", text)}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Ensures space at the bottom when scrolling
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
  },
  picker: {
    marginBottom: 10,
  },
  imagePicker: {
    width: "100%",
    height: 150,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  plus: {
    fontSize: 40,
    color: "#aaa",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

