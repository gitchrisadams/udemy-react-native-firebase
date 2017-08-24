import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

{/* 
		email, password, and error are initialized as state.

		loading state is when the app is loading so will show spinner.

		onButtonPress() is action to take when button pressed.
		The state is destructured to email and password.

		email and password are passed to firebase for authentication.
		.catch means user does not exist so create the user instead of login.
		The nested .catch shows login errors.

		value and onChangeText are passed to Input as prop 

		for secureTextEntry, we don't need the =true part if its true.

		Error message is displayed in the {this.state.error} text area.

		onLoginSuccess() Login success handler. Clears form and turns off spinner.

		renderButton() is a helper method for rendering the button and
		using a Spinner to show loading progress. 
*/}
class LoginForm extends Component {
	state = {email: '', password: '', error: '', loading: false};

	onButtonPress() {
		const {email, password} = this.state;

		this.setState({error: '', loading: true});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed.',
			loading: false
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	renderButton() {
		if (this.state.loading) {
				return <Spinner size="small" />;
		}

		return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Login
				</Button>
		);
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
					{this.renderButton()}
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










