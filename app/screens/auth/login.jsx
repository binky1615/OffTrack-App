import { StyleSheet, Text, View, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function login() {

    const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Button title="Login" onPress={() => router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})