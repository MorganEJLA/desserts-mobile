import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { useFonts } from 'expo-font'
import { WorkSans_400Regular } from '@expo-google-fonts/work-sans'
import { Truculenta_700Bold } from '@expo-google-fonts/truculenta'
import { SpaceMono_400Regular } from '@expo-google-fonts/space-mono'

import { theme } from './src/infrastructure/theme/index.js'

import { Navigation } from './src/infrastructure/navigation'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context.js'
import { LocationContextProvider } from './src/services/location/location.context.js'

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
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
