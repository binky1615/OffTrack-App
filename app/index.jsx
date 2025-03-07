import { Text, View, ImageBackground, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  return (
    <ImageBackground
      style={styles.imgbackground}
      resizeMode="cover"
      source={require("../assets/images/offtrack-welcome.png")}
    >
      <View style={styles.imgbackground}>
        <Image
          style={styles.logo}
          source={require("../assets/images/offtrack-logo.png")}
        />
        <Text style={styles.title}>Explore a new world with us</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => router.push("/screens/auth/register")}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => router.push("/screens/auth/login")}>
            <Text style={styles.buttonText}>LOGIN</Text>
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

  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "white",
    width: 240,
    right: 50,
    top: 50,
  },

  buttonContainer: {
    width: "100%",
    gap: 10,
    height: "fit-content",
    marginBottom: 34,
  },

  button: {
    backgroundColor: "black",
    borderRadius: 8,
    padding: 10,
    paddingLeft: 125,
    paddingRight: 125,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
