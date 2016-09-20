
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { setLimit } from '../../actions/list'

import { Container, Header, Title, Card, CardItem, Content, Text, Button, Icon, List, ListItem } from 'native-base';

import myTheme from '../../themes/base-theme';
import CardList from './CardList'

import {InteractionManager} from 'react-native'

class MainScreen extends Component {

    popRoute() {
        this.props.popRoute();
    }

    constructor(props){
        super(props);
        this.props.setDataLimit(4);
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions( () => {
            this.props.setDataLimit(-1);
        })
    }

    render() {

        const { props: { name, list }} = this;

        return (
            <Container theme={myTheme} style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title> Gre Words ( 1800 ) </Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content>
                    <CardList list={list} />
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        setDataLimit: (limit) => dispatch(setLimit(limit))
    }
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        list: state.list
    };
}

export default connect(mapStateToProps, bindAction)(MainScreen);
