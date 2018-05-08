import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { resetDecks, initialLoadDecks } from '../actions/'
import { white, black, red  } from '../utils/colors'
import Deck from './Deck'
import { saveDeckTitle } from '../utils/api'

class Decks extends Component {

	componentDidMount(){
		this.props.initialDataLoad()
	}

	reset = () =>{
		this.props.resetDecks()
	}

	handleNewDeck = () => {
		this.props.navigation.navigate( 'NewDeckView')
	}

	render(){

		const {decks, ready} = this.props

	    if (ready === false) {
	      return <AppLoading />
	    }

		return (
			<ScrollView>
				<View style={styles.row}>
				    <TouchableOpacity
				      style={[styles.submitBtn, {backgroundColor: red}]}
				      onPress={this.reset}>
				        <Text style={[styles.submitBtnText, {color: white}]}>Reset</Text>
				    </TouchableOpacity>  
				    <TouchableOpacity
				      style={[styles.submitBtn, {backgroundColor: red}]}
				      onPress={this.handleNewDeck}>
				        <Text style={[styles.submitBtnText, {color: white}]}>New Deck</Text>
				    </TouchableOpacity>  
				</View>				
				<View style={styles.item} >
					{decks && decks.length > 0 && decks.map( (deck) => {
						return (
							<TouchableOpacity key={deck.title}
					            onPress={() => this.props.navigation.navigate(
					              'DeckView',
					              { entryDeck: deck.title }
					            )}
					          >						
					          <Deck deck={deck} key={deck.title}/>
					        </TouchableOpacity>
						)
					})}
					{ this.props.ready && decks.length===0 ? <Text>There's nothing here! Add a Deck and start learning!</Text> : null  }
				</View>

			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    	}
	},
	submitBtn: {
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
    	marginRight: 10,
    	marginTop: 10,
    	height: 45,
		borderRadius: 2,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
    row: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 10,
	alignSelf: 'flex-end',
  },
})

function mapStateToProps (state, { navigation }) {
	if (state.decks == null) state.decks = {}
    return {
    	decks:  state.decks
	    	? Object.values(state.decks) 
	    	: {},
	    ready: state.ready ? state.ready : false
    }
}

function mapDispatchToProps (dispatch, { navigation }) {
    return {
    	initialDataLoad: () => dispatch(initialLoadDecks()),
    	resetDecks: () => dispatch(resetDecks())
    }
}

export default connect( mapStateToProps,mapDispatchToProps )(Decks)
