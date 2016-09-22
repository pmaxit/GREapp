import React from 'react';
import {View,  ListView, StyleSheet, TouchableHighlight, Animated, Text, InteractionManager } from 'react-native';

import { Container, Content, List, ListItem, Icon, Badge } from 'native-base';
import { connect } from 'react-redux';

import styles from './styles'

import Row from './Row'
<<<<<<< HEAD
import GiftedListView from 'react-native-gifted-listview';
=======
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63

export default class CardList extends React.Component{

	_renderRow(item, sectionId){
<<<<<<< HEAD
		
		
		const {list} = this.props;

		
=======
		const {list} = this.props;
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
  		return(   	
  			<Row item={item}> 
  				<Text style={styles.content}> {list.data[item]} </Text>
  			</Row>
  			);
    }
<<<<<<< HEAD
   	
   	_onFetch(page = 1, callback, options) {
   		const { data, limit} = this.props.list;
   		let rows = Object.keys(data).slice(1,limit + page*10)
   		callback(rows);
  	}

	render(){
		
		return(
			
			
		<GiftedListView
          rowView={this._renderRow.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={false} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#eee'
            },
          }}
          enableEmptySections={true}
          refreshableTintColor="blue"
        />
=======
   

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
>>>>>>> c5b126c7dc30437bc787dca7335d35e5af3d6f63
			);
	}
}