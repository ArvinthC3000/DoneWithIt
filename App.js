// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
import {
	StyleSheet,
	// Text,
	View,
	SafeAreaView,
	// Platform,
	// Dimensions,
	// Image,
} from 'react-native';
// import { uuid } from 'uuidv4';
import Header from './components/Header';

export default function App() {
	// const [items, setItems] = useState([{ id: uuid }]);
	// console.log(Dimensions.get('screen'));
	return (
		<SafeAreaView>
			<View
				style={{
					// backgroundColor: 'dodgerblue',
					// width: '100%',
					// height: '30%',
					marginTop: 40,
				}}
			>
				<Header title='Flat List' />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: Platform.OS === 'android' && 40,
		// backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});

// export default App;
