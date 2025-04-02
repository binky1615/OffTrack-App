import { useState, useEffect } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useRouter } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedEmail, setStoredEmail] = useState(null);
  const [storedPassword, setStoredPassword] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem("userEmail");
      const savedPassword = await AsyncStorage.getItem("userPassword");
      if (savedEmail && savedPassword) {
        setStoredEmail(savedEmail);
        setStoredPassword(savedPassword);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    
    if (email === storedEmail && password === storedPassword) {
      router.push("/screens/tabs/home");
    } else {
      Alert.alert("Onjuiste gebruikersnaam of wachtwoord");
    }
  };

  return (
    <ImageBackground
      style={styles.imgbackground}
      resizeMode="cover"
      source={require("../../../assets/images/loginscreen.png")}
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
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/screens/auth/register")}>  
            <Text style={styles.linktext}>Don't have an account? Sign up</Text>
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
    color: "white",
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
