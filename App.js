import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Alert,
	// Platform,
	// Dimensions,
	// Image,
} from 'react-native';
import uuidv4 from 'uuidv4';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
	const [items, setItems] = useState([
		{ id: uuidv4(), text: 'User 1' },
		{ id: uuidv4(), text: 'User 2' },
		{ id: uuidv4(), text: 'User 3' },
		{ id: uuidv4(), text: 'User 4' },
		{ id: uuidv4(), text: 'User 5' },
	]);
	// console.log(Dimensions.get('screen'));

	const deleteItem = (id) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	const addItem = (text) => {
		console.log(text);
		if (!text) {
			Alert.alert('Error', 'Please enter an item', [{ text: 'Close' }]);
			return;
		}
		setItems((prev) => [...prev, { id: uuidv4(), text }]);
	};

	return (
		<NavigationContainer>
			<SafeAreaView>
				<View style={styles.container}>
					<Header title='Flat List' />
					<AddItem addItem={addItem} />
					<FlatList
						data={items}
						renderItem={({ item }) => (
							<ListItem item={item} deleteItem={deleteItem} />
						)}
					/>
				</View>
			</SafeAreaView>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'android' && 40,
	},
});
