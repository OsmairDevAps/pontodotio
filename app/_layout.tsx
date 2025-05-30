import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="ponto" options={{ headerShown: false }} />
      </Stack>
  );
}
