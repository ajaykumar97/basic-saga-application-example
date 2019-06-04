/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import HomeScreen from './src/screens/HomeScreen';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<HomeScreen />
			</Provider>
		);
	}
}
