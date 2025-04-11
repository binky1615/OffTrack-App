import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import trips from '../../trips';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/unit-01.jpeg")} style={styles.topImage} />
      
      <Image source={require("../../../assets/images/shinji.png")} style={styles.profileImage} />
      
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Valentijn Metz</Text>
        <Text style={styles.pronouns}>he/him</Text>
      </View>
      
      <View style={styles.aboutMeContainer}>
        <Text style={styles.aboutMeText}>
          Shinji is a young gay ass gooner pilot with depression. 
          Whether he's jorking it he always thinks about his dead boyfriend kaworu.
        </Text>
      </View>
      
      <Text style={styles.favoritesTitle}>❤️ My Favorites</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 140,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    marginTop: 50,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pronouns: {
    fontSize: 14,
    color: 'gray',
  },
  aboutMeContainer: {
    marginVertical: 15,
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  aboutMeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});