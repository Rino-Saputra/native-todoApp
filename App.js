import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';

export default function App() {
  return (
    <View>
      <TodoApp />
      <StatusBar style="auto" />
    </View>
  );
}
