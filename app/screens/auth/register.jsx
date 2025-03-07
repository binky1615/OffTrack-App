import { StyleSheet, Text, View, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function register() {

    const router = useRouter()

  return (
    <View style={styles.container}>
      <Text>login</Text>
      <Button title="register" onPress={() => router.back()} />
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