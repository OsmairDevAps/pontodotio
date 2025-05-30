import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ponto</Text>
      <TouchableOpacity 
        style={styles.botao}
        onPress={router.back}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  botao: {
    marginTop: 10,
    padding: 10,
    borderColor: '#121212',
    backgroundColor: '#eaeaea',
  }
});
