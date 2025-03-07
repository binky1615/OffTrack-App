import { Text, View, ImageBackground, Image, StyleSheet, Pressable, TextInput } from "react-native";
import { useRouter } from 'expo-router'

export default function login() {
  const router = useRouter()

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
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={() => router.push("/screens/tabs/home")}>
            <Text style={styles.buttonText}>create account</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/screens/auth/login")}>
            <Text style={styles.linktext}>Don't have an account? Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  )
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
      },

      buttonContainer: {
        width: "100%",
        gap: 10,
        height: "fit-content",
        marginBottom: 34,
      },
    
      button: {
        backgroundColor: "black",
        borderRadius: 16,
        padding: 10,
        paddingLeft: 120,
        paddingRight: 120,
        alignItems: "center",
      },
    
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
})