
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
<<<<<<< HEAD
import { setIndex, setLimit,fetchData, fetchData2, fetchData3, increaseLimit, pushItem } from '../../actions/list'
import { Container, Header, Title, Card, 
    CardItem, Content, Text, Button, 
    Icon, List, ListItem, Spinner, Tabs } from 'native-base';
=======
import { setLimit } from '../../actions/list'

import { Container, Header, Title, Card, CardItem, Content, Text, Button, Icon, List, ListItem } from 'native-base';
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63

import myTheme from '../../themes/base-theme';
import CardList from './CardList'

<<<<<<< HEAD
import { InteractionManager } from 'react-native'
=======
import {InteractionManager} from 'react-native'
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63

class MainScreen extends Component {

    popRoute() {
        this.props.popRoute();
    }

    constructor(props){
        super(props);
<<<<<<< HEAD
        //this.props.fetchData3(this.props.childRef)
        //this.props.pushItem(this.props.list.data)
    }

    componentWillMount(){
        if(this.props.list.data === null){
            //this.props.fetchData();
            this.props.fetchData3(this.props.childRef)
        }
        //this.props.fetchData();
=======
        this.props.setDataLimit(4);
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions( () => {
            this.props.setDataLimit(-1);
        })
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
    }

    render() {

        const { props: { name, list }} = this;
<<<<<<< HEAD
        
=======

>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
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
<<<<<<< HEAD
                
                <Content>
                   {list.data === null? <Spinner color='red'/>:
                    <CardList {...this.props} 
                            incrLimit={this.props.increaseLimit.bind(this)} /> }
                   
                </Content>

=======

                <Content>
                    <CardList list={list} />
                </Content>
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
<<<<<<< HEAD
        setDataLimit: (limit) => dispatch(setLimit(limit)),
        fetchData: ()=> dispatch(fetchData()),
        fetchData2: ()=> dispatch(fetchData2()),
        fetchData3: (ref) => dispatch(fetchData3(ref)),
        increaseLimit: () => dispatch(increaseLimit()),
        pushItem: (text) => dispatch(pushItem(text))
=======
        setDataLimit: (limit) => dispatch(setLimit(limit))
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
    }
}

function mapStateToProps(state) {
<<<<<<< HEAD
    
    return {
        name: state.user.name,
        list: state.list,
        childRef: state.db.child
=======
    return {
        name: state.user.name,
        list: state.list
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
    };
}

export default connect(mapStateToProps, bindAction)(MainScreen);
