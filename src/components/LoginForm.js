import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input} from './common';

{/* 
		email, password, and error are initialized as state.

		onButtonPress() is action to take when button pressed.
		The state is destructured to email and password.

		email and password are passed to firebase for authentication.
		.catch means user does not exist so create the user instead of login.
		The nested .catch shows login errors.

		value and onChangeText are passed to Input as prop 

		for secureTextEntry, we don't need the =true part if its true.

		Error message is displayed in the {this.state.error} text area.
*/}
class LoginForm extends Component {
	state = {email: '', password: '', error: ''};

	onButtonPress() {
		const {email, password} = this.state;

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({error: 'Authentication failed.'});
					});
			});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="yourEmail@yourEmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({email})}
					/>
				</CardSection>


				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({password})}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};


export default LoginForm;










