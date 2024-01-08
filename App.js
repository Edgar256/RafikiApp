import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import the screens
import {Welcome, LoginOptions, SignUp, Login, Feed} from './screens';
import TabNavigator from './navigations/TabNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Welcome'}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginOptions"
          component={LoginOptions}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TabNavigator"
          component={TabNavigator}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
