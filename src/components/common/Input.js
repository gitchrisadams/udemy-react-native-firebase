import React from 'react';
import {TextInput, View, Text} from 'react-native';

{/* label prop passed in can be displayed in <Text> tag */}
const Input = ({label, value, onChangeText}) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChangeText}
				style={{height: 20, width: 100}}
			/>
		</View>
	)
};

export {Input};