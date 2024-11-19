import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            header: ({route})=> <Header subtitle={route.name}/>
        }}
    >
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
        />

    </Stack.Navigator>
  )
}

export default HomeNavigator

const styles = StyleSheet.create({})