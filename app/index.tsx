import { Stack } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
