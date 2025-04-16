import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import trips from "../../trips";

export default function DetailPage() {
  const [weather, setWeather] = useState(null);
  const { id } = useLocalSearchParams();
  const trip = trips.find((trip) => trip.id === String(id));
  const apiKey = `f34657d774b86758820489a0119ca803`;

  if (!trip) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Trip not found</Text>
      </View>
    );
  }

useEffect(() => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${trip.title}&appid=${apiKey}&units=metric&lang=nl`
    )
    .then((response) => {
      setWeather(response.data);
    })
    .catch((error) => {
      console.error("Fout bij ophalen van het weer:", error);
    });
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{trip.title}</Text>
      <Image
        source={trip.image}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      />
              <View style={styles.weatherContainer}>
      {weather ? (
        <View>
          <Text>Temperatuur: {Math.round(weather.main.temp)}°C</Text>
          <Text>Beschrijving: {weather.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Weer wordt geladen...</Text>
      )}
      </View>
      <Text style={styles.description}>{trip.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#e5e7eb", // subtle light gray border
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // for Android shadow
    width: "100%", // make it stretch horizontally like the input
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  flag: {
    width: 40,
    height: 30,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
});
