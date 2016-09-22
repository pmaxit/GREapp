import React, { Component } from 'react';

import {Container, Header, Title, Content} from 'native-base';
import LoginScreen from '../components/LoginScreen'

export default class Login extends Component{
	render(){
		return(
				<LoginScreen />
			);
	}
}