import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text, Image } from 'react-native';
import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({ navigation }) {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/panda.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Health Monitor"
          onPress={() => navigation.navigate('HealthMonitor')}
        />
        <AppButton title="Behavior Monitor" />
        <AppButton title="Environment Monitor" />
        <AppButton title="Diet Monitor" />
        <AppButton title="Notifications" />
        <AppButton title="Sign Out" onPress={handleSignOut} />
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
    top: 0,
    alignItems: 'center',
    
  },
    logo: {
    width: 190,
    height: 190,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%',
  },
});
