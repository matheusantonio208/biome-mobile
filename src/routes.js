import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingUp from './pages/SingUp/singUp';
import SingIn from './pages/SingIn/singIn';
import WalletCreate from './pages/Wallet/wallet-create';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#7159c1' },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="WalletCreate" component={WalletCreate} />
        <Stack.Screen name="SingUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
