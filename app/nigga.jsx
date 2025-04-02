import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function index() {
    const [name, setName] = useState('');

    useEffect(() => {
        getData()
    }, [])

    const saveData = async () => {
        try {
            await AsyncStorage.setItem("username", name);
            alert("Gelukt Naam opgeslagen");
        } 
        catch (error) {
            console.error("error met ophalen", error);
        }
    }

    // maak een funtie genaamd getData, Daarin een try en een catch 
    const getData = async () => {
        try {
            const storedName = await AsyncStorage.getItem("username");
            if (storedName!== null) {
                setName(storedName);
            }
        } catch (error) {
            console.error("error met ophalen", error);
        }
    }

    

  return (
    <View style={styles.container}>
      <Text>Voer je naam in:</Text>
      <TextInput
        style={styles.input}
        placeholder="Naam"
        onChangeText={setName}
      />
      <Button title="Opslaan" onPress={saveData}/>
      <Text>Opgeslagen naam: {name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});