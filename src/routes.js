import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SingIn from '#views/pages/SingIn/singIn-page.js';
import SingUp from '#views/pages/SingUp/singUp-page.js';
import Start from '#views/pages/Start/start-page.js';
import WalletCreate from '#views/pages/Wallet/wallet-create-page.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="WalletCreate" component={WalletCreate} />
        <Stack.Screen name="SignUp" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
