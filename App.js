import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Image source={require('./images/profile.jpg')} style={{ width: 400, height: 400 }}/>
      <Text>Hello! My name is Robert Leggat, I am a Computer Science student at UC Berkeley</Text>
    </View>
  );
}

function ResumeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./images/resume1024_1.jpg')} style={{ width: 850, height:1100}}/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Resume" component={ResumeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
