import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from './Detail';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  btn: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

function HelloWorld(props) {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Button
        title='Details Screen'
        onPress={() => navigate('Detail')}
        style={styles.btn}
      />
    </View>
  );
}

const SimpleApp = createAppContainer(
  createStackNavigator({
    Home: { screen: HelloWorld },
    Detail: {
      screen: DetailScreen,
      path: 'detail/:user'
    }
  })
);

export default SimpleApp;
