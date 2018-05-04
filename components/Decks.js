import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { initialLoadDecks } from '../actions/'
import Deck from './Deck'

class Decks extends Component {

	componentDidMount(){
		this.props.initialDataLoad()
	}

	render(){

		const {decks} = this.props
		if(decks && decks.length > 0){
			console.log("----------------------")
			console.log(decks)
			console.log(decks[0])
			console.log(decks[1])
			console.log(Object.keys(decks[0]))
			console.log(decks[0].title)
			console.log(decks[1].title)
		}

		return (
			<View>
				<Text>Start</Text>
				{decks && decks.map( (deck) => {
					return <Deck deck={deck} key={deck.title}/>
				})}
				<Text>Done</Text>				
			</View>
		)
	}
}

function mapStateToProps (state, { navigation }) {

	    console.log(JSON.stringify(Object.values(state.decks)))
	    return {
	    	decks: Object.values(state.decks)
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
