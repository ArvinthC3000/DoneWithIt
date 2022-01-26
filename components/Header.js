import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

export default Header;

Header.defaultProps = {
	title: 'List',
};

const styles = StyleSheet.create({
	header: {
		height: 60,
		padding: 15,
		backgroundColor: 'darkslateblue',
	},
	text: {
		color: '#fff',
		fontSize: 23,
		textAlign: 'center',
	},
});
