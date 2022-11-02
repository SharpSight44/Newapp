import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import MainPage from './screens/track';

// import Secondtype from './screens/Secondtype';

const Stack = createNativeStackNavigator(); 
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

