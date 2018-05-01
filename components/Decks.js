import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { initialLoadDecks } from '../actions/'

class Decks extends Component {

	componentDidMount(){
		this.props.initialDataLoad()
	}

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

function mapStateToProps (state, { navigation }) {
    return {

    }
}

function mapDispatchToProps (dispatch, { navigation }) {
    return {
    	initialDataLoad: () => dispatch(initialLoadDecks())
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Decks)
