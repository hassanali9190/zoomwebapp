import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../utils/colors';
import SafeView from '../components/SafeView';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import FormButton from '../components/Forms/FormButton';
import IconButton from '../components/IconButton';
import FormErrorMessage from '../components/Forms/FormErrorMessage';
import { registerWithEmail } from '../components/Firebase/firebase';
import useStatusBar from '../hooks/useStatusBar';
import { View, Button } from 'react-native';
import { Text, Image } from 'react-native';
import AppButton from '../components/AppButton';
import { logout } from '../components/Firebase/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { viewrecords } from '../components/Firebase/firebase';


export default function ViewRecord({ navigation }) {
  useStatusBar('light-content');
const [rec,setRec] = useState({})

  async function addpatient(values, actions) {
    const {id, illness, adding_date, removing_date } = values;
    try {
      setRec(await viewrecords ( id, illness, adding_date, removing_date ))
    } catch (error) {
      alert('error');
    }
  }

  return (
    <SafeView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/panda.png')} style={styles.logo} />
      </View>
      <Form
        initialValues={{
          id: '',

        }}
        onSubmit={values => addpatient(values)}
      >
        <FormField
          name="id"
          placeholder="Enter Animal ID"
          autoFocus={true}
        />

        
        <FormButton title={'Submit'} />
        {JSON.stringify(rec)}
        {
          Object.keys(rec).map(key=>{
            return (<FormField
            name={key}
            placeholder={rec[key]}/>)
          })
        }
      </Form>
      <IconButton
        style={styles.backButton}
        iconName="keyboard-backspace"
        color={Colors.white}
        size={30}
        onPress={() => navigation.navigate('HealthMonitor')}
      />
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: Colors.green
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
   logoContainer: {
    position: 'absolute',
    bottom:0,
    left:50,
    alignItems: 'center',
    
  },
    logo: {
    width: 210,
    height: 210,
  },
});
