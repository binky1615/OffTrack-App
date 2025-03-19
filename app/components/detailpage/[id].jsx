import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import trips from '../../trips'; // ✅ Ensure correct import path

export default function DetailPage() {
    const { id } = useLocalSearchParams(); // ✅ Get ID from the URL
    const trip = trips.find((trip) => trip.id === String(id)); // ✅ Convert id to string and find trip

    if (!trip) {
        return <View style={styles.errorContainer}><Text style={styles.errorText}>Trip not found</Text></View>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{trip.title}</Text>
            <Image source={trip.image} style={styles.image} imageStyle={{ borderRadius: 10 }} />
            <Text style={styles.description}>{trip.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
