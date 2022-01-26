import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const LogIn = ({ navigation }) => {
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text>Click here to LogIn</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default LogIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		// marginTop: Platform.OS === 'android' && 40,
	},
});
