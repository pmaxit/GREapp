
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { setIndex, setLimit,fetchData, fetchData2, fetchData3, increaseLimit, pushItem } from '../../actions/list'
import { Container, Header, Title, Card, 
    CardItem, Content, Text, Button, 
    Icon, List, ListItem, Spinner, Tabs } from 'native-base';

import myTheme from '../../themes/base-theme';
import CardList from './CardList'

import { InteractionManager } from 'react-native'

class MainScreen extends Component {

    popRoute() {
        this.props.popRoute();
    }

    constructor(props){
        super(props);
        //this.props.fetchData3(this.props.childRef)
        //this.props.pushItem(this.props.list.data)
    }

    componentWillMount(){
        if(this.props.list.data === null){
            //this.props.fetchData();
            this.props.fetchData3(this.props.childRef)
        }
        //this.props.fetchData();
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
                   {list.data === null? <Spinner color='red'/>:
                    <CardList {...this.props} 
                            incrLimit={this.props.increaseLimit.bind(this)} /> }
                   
                </Content>

            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        setDataLimit: (limit) => dispatch(setLimit(limit)),
        fetchData: ()=> dispatch(fetchData()),
        fetchData2: ()=> dispatch(fetchData2()),
        fetchData3: (ref) => dispatch(fetchData3(ref)),
        increaseLimit: () => dispatch(increaseLimit()),
        pushItem: (text) => dispatch(pushItem(text))
    }
}

function mapStateToProps(state) {
    
    return {
        name: state.user.name,
        list: state.list,
        childRef: state.db.child
    };
}

export default connect(mapStateToProps, bindAction)(MainScreen);
