import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter()

  function BaterPonto() {
    router.navigate('/ponto')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Index</Text>
      <TouchableOpacity 
        style={styles.botao}
        onPress={BaterPonto}
      >
        <Text>Bater Ponto</Text>
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
