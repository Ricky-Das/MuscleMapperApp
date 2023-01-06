import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen';
import AllWorkoutsScreen from '../screens/AllWorkoutsScreen';
import ProgressScreen from '../screens/ProgressScreen';


const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'All Workouts') {
              iconName = 'dumbbell';
            } else if (route.name === 'Insights') {
                iconName = focused ? 'analytics' : 'analytics-outline'
            }

            // You can return any component that you like here!

            if (route.name == 'All Workouts') {return <FontAwesome5 name="dumbbell" size={size - 6} color={color} />}
            else {return <Ionicons name={iconName} size={size} color={color} />;}
          },
          tabBarActiveTintColor: 'crimson',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="All Workouts" component={AllWorkoutsScreen} />
        <Tab.Screen name="Insights" component={ProgressScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}