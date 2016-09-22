import React, { Component } from 'react';

import {Container, Header, Title, Content} from 'native-base';
import Login from './Login'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'


export default class App extends Component{
	render(){
		return(
				<Login />
			);
	}
}