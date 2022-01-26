import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import LogIn from './components/LogIn';

export default function App() {
	enableScreens();
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Log In'
					options={{ title: 'Log In' }}
					component={LogIn}
				/>
				<Stack.Screen
					name='Home'
					options={{ title: 'List page' }}
					component={Home}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
