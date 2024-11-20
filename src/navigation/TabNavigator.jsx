import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from "../global/colors"
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
                name="Configuracion"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="settings"
                            size={32}
                            color={focused ? colors.grisOscuro : colors.grisMedio}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="store"
                            size={32}
                            color={focused ? colors.grisOscuro : colors.grisMedio}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="shopping-cart"
                            size={32}
                            color={focused ? colors.grisOscuro : colors.grisMedio}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

