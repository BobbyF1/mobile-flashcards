import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { initialLoadDecks } from '../actions/'
import { white  } from '../utils/colors'
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

	render(){

		const {decks} = this.props

		return (
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
