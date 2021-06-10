import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import HealthMonitorScreen from '../screens/HealthMonitorScreen';
import AddPatient from '../screens/AddPatient';
import RemovePatient from '../screens/RemovePatient';
import UpdateStatus from '../screens/UpdateStatus';
import ViewRecords from '../screens/ViewRecords';




const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome to Zoo Monitoring App "
        component={HomeScreen}
      />
      <Stack.Screen name="HealthMonitor" component={HealthMonitorScreen} />
      <Stack.Screen name="AddPatient" component={AddPatient} />
      <Stack.Screen name="RemovePatient" component={RemovePatient} />
      <Stack.Screen name="UpdateStatus" component={UpdateStatus} />
      <Stack.Screen name="ViewRecords" component={ViewRecords} />
    </Stack.Navigator>
  );
}
