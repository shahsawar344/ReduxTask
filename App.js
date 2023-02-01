import {LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import UserScreen from './src/navigation/UserScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  
  return (
    <Provider store={store}>
      <UserScreen />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
