import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { fetchCalendarResults } from '../utils/api'
import { white } from '../utils/colors'
import { AppLoading } from 'expo'

export default class Decks extends Component {
	render(){
		return (
			<View>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
				<Text>Test</Text>
			</View>
		)
	}
}

// function mapStateToProps (decks) {
//   return {
//     decks
//   }
// }

// export default connect()(Decks)
