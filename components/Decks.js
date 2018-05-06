import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { initialLoadDecks } from '../actions/'
import { white, black, red  } from '../utils/colors'
import Deck from './Deck'
import { setDecks, saveDeckTitle } from '../utils/api'

class Decks extends Component {

	componentDidMount(){
		this.props.initialDataLoad()
	}

	reset = () =>
	{
		setDecks({})
		  saveDeckTitle("TestDeck")
		  saveDeckTitle("TestDeckNo2")
		  saveDeckTitle("Another List of Questions")
	}

	handleNewDeck = () => {
		console.log("handleNewDeck")
		this.props.navigation.navigate( 'NewDeckView')
	}

	render(){

		const {decks} = this.props

		return (
			<ScrollView>
				<View style={styles.item} >
					{decks && decks.map( (deck) => {
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

					    <TouchableOpacity
					      onPress={this.reset}
					      >
					        <Text>Reset</Text>
					    </TouchableOpacity>  

				</View>
				<View>
				    <TouchableOpacity
				      style={[styles.submitBtn, {backgroundColor: red}]}
				      onPress={this.handleNewDeck}
				      >
				        <Text style={[styles.submitBtnText, {color: white}]}>New Deck</Text>
				    </TouchableOpacity>  
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
	container: {
		justifyContent: 'center',
		marginTop: 50,
		padding: 20,
		backgroundColor: white,
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
})

function mapStateToProps (state, { navigation }) {
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
