import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screen/Cart';
import CartScreen from '../screen/CartScreen';

const UserScreen = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SingleCart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
