import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

{/* value and onChangeText are passed to Input as prop */}
class LoginForm extends Component {
	state = {email: '' };
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
				<CardSection />

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;