import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
	render(){
		return(
			<View>
				<Text>{this.props.deck && this.props.deck.title}</Text>
			</View>
		)
	}
}

function mapStateToProps (state, { navigation }) {
  const { entryDeck } = navigation.state.params

  console.log("mapStateToProps")
  console.log(entryDeck)
  console.log(state.decks)
  console.log(state.decks[entryDeck])

  return {
    deck: state.decks[entryDeck],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const { entryDeck } = navigation.state.params

  return {
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeckView)
