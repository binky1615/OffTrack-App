import { useState } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useRouter } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("userEmail", email);
      await AsyncStorage.setItem("userPassword", password);
    } catch (e) {
      console.error("Error saving data", e);
    }
  };

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    await saveData();
    router.push("/screens/auth/login");
  };

  return (
    <ImageBackground
      style={styles.imgbackground}
      resizeMode="cover"
      source={require("../../../assets/images/registerscreen.png")}
    >
      <View style={styles.imgbackground}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/offtrack-logo.png")}
        />
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Pressable style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/screens/auth/login")}>  
            <Text style={styles.linktext}>Already have an account? Log in</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgbackground: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 150,
    resizeMode: "contain",
    right: 75,
  },
  linktext: {
    paddingTop: 20,
    color: "black",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    width: 250,
  },
  buttonContainer: {
    width: "100%",
    gap: 10,
    height: "fit-content",
    marginBottom: 34,
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
