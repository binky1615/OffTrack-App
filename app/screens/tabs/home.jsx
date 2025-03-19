import { FlatList, Text, View, StyleSheet, ImageBackground, Image, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import trips from "../../trips.js";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id} // Ensure that keyExtractor uses item.id
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Navigate using the item's id dynamically */}
            <Pressable onPress={() => router.push(`/components/detailpage/${item.id}`)}>
              <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
                <View style={styles.overlay}>
                  <Image source={item.flag} style={styles.flag} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </ImageBackground>
            </Pressable>
            <Text style={styles.duration}>{item.triplength}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ededed",
  },
  item: {
    marginBottom: 20,
    alignItems: "center",
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "white",
    width: 100,
    height: 30,
    borderRadius: 10,
    textAlign: "center",
  },
  image: {
    width: 330,
    height: 160,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
  flag: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "white",
  },
  overlay: {
    flex: 1,
    flexDirection: "row",
    left: 10,
    top: 120,
    gap: 10,
  },
  duration: {
    fontSize: 12,
    color: "grey",
    marginRight: 170,
  }
});