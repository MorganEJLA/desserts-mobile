import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { SafeArea } from '../../components/utility/safe-area.component'
import { Text } from 'react-native'
import { RestaurantsNavigator } from './restaurants.navigator'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { MapScreen } from '../../features/map/screens/map.screen'
import { colors } from '../../infrastructure/theme/colors'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: { lib: MaterialIcons, name: 'bakery-dining' },
  Settings: { lib: MaterialIcons, name: 'settings' },
  Map: { lib: FontAwesome, name: 'map-signs' },
}

const screenOptions = ({ route }) => {
  const { lib: IconComponent, name } = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <IconComponent name={name} size={size} color={color} />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.text.disabled,
    tabBarStyle: {
      backgroundColor: colors.bg.secondary,
    },
  }
}

// Placeholder Screens
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

// Main Tab Navigator
export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
