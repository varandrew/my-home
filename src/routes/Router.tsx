import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../pages/List';
import Chart from '../pages/Chart';
import type {Routes} from './routes';

const Tab = createBottomTabNavigator<Routes>();
Icon.loadFont();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'List') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Chart') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }

            return <Icon name={iconName as string} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Chart" component={Chart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
