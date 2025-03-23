import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { Truculenta_700Bold } from '@expo-google-fonts/truculenta'
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono'

import { theme } from './src/infrastructure/theme/index.js'
import { colors } from './src/infrastructure/theme/colors.js'
import { Text } from 'react-native'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { SafeArea } from './src/components/utility/safe-area.component.js'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js'
import { LocationContextProvider } from './src/services/location/location.context.js'
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

// Placeholder screens
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
)

// Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  )
}

// App Component
export default function App() {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Truculenta_700Bold,
    SpaceMono_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
          <ExpoStatusBar style="auto" />
        </LocationContextProvider>
      </ThemeProvider>
    </>
  )
}
