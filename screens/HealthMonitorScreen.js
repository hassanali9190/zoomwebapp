import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import { logout } from '../components/Firebase/firebase';
import { Text, Image } from 'react-native';

export default function HealthMonitorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/panda.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Add Patient"
          onPress={() => navigation.navigate('AddPatient')}
        />
        <AppButton
          title="Remove Patient"
          onPress={() => navigation.navigate('RemovePatient')}
        />
        <AppButton
          title="Update Status"
          onPress={() => navigation.navigate('UpdateStatus')}
        />
        <AppButton
          title="View Medical Record"
          onPress={() => navigation.navigate('ViewRecords')}
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
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 260,
  },
});
