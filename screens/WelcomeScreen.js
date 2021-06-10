import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';

export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/panda.png')}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Zoo Monitoring App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.green,

  },
  logoContainer: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '600',
    paddingVertical: 20,
    color: Colors.white,
    
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%',
  },
});
