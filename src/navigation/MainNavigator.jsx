import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})