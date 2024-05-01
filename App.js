import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
const Stack = createNativeStackNavigator();
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }} // You can customize the header title here
      />
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:windowWIdth*0.1
  },
});
