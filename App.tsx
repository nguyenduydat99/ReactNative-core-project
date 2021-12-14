/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {StatusBar, View, Text} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <View>
            <Text> what s up </Text>
          </View>
        </QueryClientProvider>
      </NavigationContainer>
    </React.Fragment>
  )
}

export default App
