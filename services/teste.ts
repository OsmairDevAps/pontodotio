// import { useState } from 'react'
// import { View, Button, Text, Alert } from 'react-native'
// import * as Location from 'expo-location'
// import { supabase } from '../services/supabase'
// import { calcularDistancia } from '../services/geoUtils'

// const EMPRESA_LAT = -16.331280926534344 // Exemplo: latitude da empresa
// const EMPRESA_LON = -48.95583376148629 // Exemplo: longitude da empresa
// const RAIO_METROS = 50 // Raio de tolerância em metros

// export default function BatidaPonto() {
//   const [status, setStatus] = useState<string>('')

//   async function baterPonto(): Promise<void> {
//     const { status: permissionStatus } = await Location.requestForegroundPermissionsAsync()
//     if (permissionStatus !== 'granted') {
//       Alert.alert('Permissão negada', 'Permita o acesso à localização para bater o ponto.')
//       return
//     }

//     const location = await Location.getCurrentPositionAsync({})
//     const { latitude, longitude } = location.coords

//     const distancia = calcularDistancia(latitude, longitude, EMPRESA_LAT, EMPRESA_LON)

//     if (distancia > RAIO_METROS) {
//       Alert.alert('Fora da área', 'Você está fora do local autorizado.')
//       return
//     }

//     const { error } = await supabase.from('batidas').insert([
//       {
//         nome_funcionario: 'Fulano', // Substitua isso depois por algo dinâmico
//         data_hora: new Date().toISOString(),
//         latitude,
//         longitude,
//       },
//     ])

//     if (error) {
//       Alert.alert('Erro', 'Não foi possível registrar o ponto.')
//     } else {
//       Alert.alert('Sucesso', 'Ponto registrado com sucesso!')
//     }
//   }

//   return (
//     <View style={{ padding: 20 }}>
//       <Button title="Bater Ponto" onPress={baterPonto} />
//       <Text style={{ marginTop: 10 }}>{status}</Text>
//     </View>
//   )
// }
