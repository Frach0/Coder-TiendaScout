import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet } from "react-native"

import HomeNavigator from "./HomeNavigator"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            //tabBatSyle: syles.tabbar
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeNavigator}
            /*options = {{
                tabBarIcon: ({focused})=>(<Icon name="receipt-long" size={32} color={focused?colors.grisOscuro:colors.grisMedio} />)
            }}*/
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

