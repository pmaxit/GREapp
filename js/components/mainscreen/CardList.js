import React from 'react';
import {View,  ListView, StyleSheet, TouchableHighlight, Animated, Text} from 'react-native';

import { Container, Content, List, ListItem, Icon, Badge } from 'native-base';

//import Icon from 'react-native-vector-icons/FontAwesome';


var styles = StyleSheet.create({
    container   : {
        backgroundColor: 'transparent',
        margin:10,
        overflow:'hidden',

    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#FFFFFF',
        fontWeight:'bold'
    },
    content       : {
        flex    : 1,
        padding : 3,
        color   :'#F2F2F2',
        fontWeight:'normal'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0,

    }
});

var json = require("../../data/dict.json")

class CardList extends React.Component{

	toggle(){

	}
	_renderRow(item, sectionId){
		
  		return(
                  	
  				<Row item={item}> 
  					<Text style={styles.content}> {json[item]} </Text>
  				</Row>

  				
  			);
    }

    constructor(props){
    	super(props);
    	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      		dataSource: ds.cloneWithRows(Object.keys(json)),
    	};

    }

	render(){
		return(
			
			<List>
				 <ListView dataSource={this.state.dataSource}
				 	renderRow={this._renderRow} 
				 	initialListSize={3}
				 	scrollRenderAheadDistance={4}
				 	removeClippedSubViews={true}
				 	/>
            </List>
            
			);
	}

}

class Row extends React.Component{
	constructor(props){
		super(props);

		this.state={
			expanded: false,
			animation: new Animated.Value()
		}
	}

	toggle(){
		let initialValue = this.state.expanded? this.state.maxHeight + this.state.minHeight: this.state.minHeight;
		let finalValue = this.state.expanded? this.state.minHeight: this.state.maxHeight + this.state.minHeight;
		
		this.setState({expanded: !this.state.expanded})

		this.state.animation.setValue(initialValue);

		// go to final value
		Animated.spring(
			this.state.animation,
			{
				toValue: finalValue
			}).start();
	}

	
	_setMinHeight(event){
		this.setState({
			minHeight: event.nativeEvent.layout.height
		})
		this.state.animation.setValue(event.nativeEvent.layout.height);
	}

	_setMaxHeight(event){
		this.setState({
			maxHeight: event.nativeEvent.layout.height
		})
	}

	render(){
		const {item} = this.props

		let icon = "ios-arrow-up"
		if(!this.state.expanded){
			icon = "ios-arrow-down";
		}

		var header=(<Text style={styles.title}>{item}</Text>);
		var content=(<View style={styles.body} >
                				{this.props.children}
                			</View>);
		return(
			<ListItem iconRight button onPress={this.toggle.bind(this)}>

  					<Icon name={icon} size={30} color="#4F8EF7"/>

  						<Animated.View style={[styles.container, {height: this.state.animation }]} >
                        	
                        	<View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)} >
                        		<Text style={styles.title}>{item}</Text>		
                			</View>

                			<View style={styles.body} onLayout={this._setMaxHeight.bind(this)} >
                				{this.props.children}
                			</View>
                		</Animated.View>
                		

                	
  			</ListItem>
		);
	}
}

export default CardList;