import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
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

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Header title='Flat List' />
				<AddItem />
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<ListItem item={item} deleteItem={deleteItem} />
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'android' && 40,
	},
});
