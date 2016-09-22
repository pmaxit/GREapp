import React, { Component } from 'react';

import { Container, Content, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import {Text} from 'react-native'

export default class LoginScreen extends Component{
	render(){
		return(
				 <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-person' />
                                <Input placeholder='EMAIL' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-unlock' />
                                <Input placeholder='PASSWORD' secureTextEntry={true}/>
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input inlineLabel label='NAME' placeholder='John Doe' />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label='Address Line 1' placeholder='Address' />
                            </InputGroup>
                        </ListItem>
                    </List>
                </Content>
            </Container>
			);
	}
}