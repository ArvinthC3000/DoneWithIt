import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
import AddItem from './AddItem';
import Header from './Header';
import ListItem from './ListItem';
const URL = 'https://api.dhobighat.org/Userapi/getServices';

const Home = () => {
	const [items, setItems] = useState();

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const res = await axios.get(URL, {
			headers: {
				'secret-token': 'esfbsfdgfvfghfbcvfbvdfbfzd',
			},
		});
		setItems(res.data.data);
	};
	// console.log(Dimensions.get('screen'));

	const deleteItem = (id) => {
		setItems((prev) => prev.filter((item) => item.id !== id));
	};

	const addItem = (service_name) => {
		if (!service_name)
			return Alert.alert('Error', 'Please enter an item', [
				{ text: 'Close' },
			]);
		setItems((prev) => [...prev, { id: uuidv4(), service_name }]);
	};

	return (
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
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		// marginTop: Platform.OS === 'android' && 40,
	},
});
