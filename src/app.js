import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

{/* 
		onAuthStateChanged will keep track of when a use signs in
		or they sign out. 
*/}
class App extends Component {
	state = {
		loggedIn: null
	};

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: "AIzaSyBi56VXE1D0gDyWH8ENtyvMrMgL1KVcV6E",
	    authDomain: "udemy-react-native-auth-53d16.firebaseapp.com",
	    databaseURL: "https://udemy-react-native-auth-53d16.firebaseio.com",
	    projectId: "udemy-react-native-auth-53d16",
	    storageBucket: "udemy-react-native-auth-53d16.appspot.com",
	    messagingSenderId: "930663721876"
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({loggedIn: true});
			} else {
				this.setState({loggedIn: false});
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<CardSection>
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
					</CardSection>
				);

			case false:
				return <LoginForm />;

			default:
				return <Spinner size="large" />;
		}

	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<View>{this.renderContent()}</View>
			</View>
		);
	}
}

export default App;