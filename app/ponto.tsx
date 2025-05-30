import { useState } from 'react'
import { View, Button, Text } from 'react-native'

export default function BatidaPonto() {
  const [status, setStatus] = useState<string>('Clicar')

  return (
    <View style={{ padding: 20 }}>
      <Button title="Bater Ponto" onPress={()=>{}} />
      <Text style={{ marginTop: 10 }}>{status}</Text>
    </View>
  )
}
