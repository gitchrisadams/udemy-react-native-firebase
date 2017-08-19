import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBi56VXE1D0gDyWH8ENtyvMrMgL1KVcV6E",
	    authDomain: "udemy-react-native-auth-53d16.firebaseapp.com",
	    databaseURL: "https://udemy-react-native-auth-53d16.firebaseio.com",
	    projectId: "udemy-react-native-auth-53d16",
	    storageBucket: "udemy-react-native-auth-53d16.appspot.com",
	    messagingSenderId: "930663721876"
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;