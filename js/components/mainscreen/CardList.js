import React from 'react';
import {View,  ListView, StyleSheet, TouchableHighlight, Animated, Text, InteractionManager } from 'react-native';

import { Container, Content, List, ListItem, Icon, Badge } from 'native-base';
import { connect } from 'react-redux';

import styles from './styles'

import Row from './Row'

export default class CardList extends React.Component{

	_renderRow(item, sectionId){
		const {list} = this.props;
  		return(   	
  			<Row item={item}> 
  				<Text style={styles.content}> {list.data[item]} </Text>
  			</Row>
  			);
    }
   

	render(){
		
		const {	data, initialListSize, 
				scrollRenderAheadDistance, 
				removeClippedSubViews,
				limit
			} = this.props.list;

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const dataSource = ds.cloneWithRows(Object.keys(data).slice(1,limit))

		return(
			
			<List>
				 <ListView dataSource={dataSource}
				 	renderRow={this._renderRow.bind(this)} 
				 	initialListSize={initialListSize}
				 	scrollRenderAheadDistance={scrollRenderAheadDistance}
				 	removeClippedSubViews={removeClippedSubViews}
				 	/>
            </List>
			);
	}
}