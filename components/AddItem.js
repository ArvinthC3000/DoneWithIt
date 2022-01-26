import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const AddItem = ({ addItem }) => {
	const [text, setText] = useState('');

	const onChange = (e) => setText(e);

	return (
		<View>
			<TextInput
				placeholder='Add new User'
				style={styles.input}
				onChangeText={onChange}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
				<Text style={styles.btnText}>
					<FontAwesome name='plus' size={18} /> Add Item
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddItem;

const styles = StyleSheet.create({
	input: {
		height: 60,
		padding: 8,
		fontSize: 16,
	},
	btn: {
		backgroundColor: '#c2bad8',
		padding: 9,
		margin: 5,
	},
	btnText: {
		color: 'darkslateblue',
		fontSize: 20,
		textAlign: 'center',
	},
});
