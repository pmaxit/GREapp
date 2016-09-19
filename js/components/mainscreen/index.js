
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Card, CardItem, Content, Text, Button, Icon, List, ListItem } from 'native-base';

import myTheme from '../../themes/base-theme';
import CardList from './CardList'

var json = require("../../data/dict.json")
import Accordion from 'react-native-accordion'
import {View} from 'react-native'

class MainScreen extends Component {

    popRoute() {
        this.props.popRoute();
    }



    render() {

        const { props: { name, index, list } } = this;
        var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

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
                    <CardList />
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        index: state.list.selectedIndex,
        list: state.list.list
    };
}

export default connect(mapStateToProps, bindAction)(MainScreen);
