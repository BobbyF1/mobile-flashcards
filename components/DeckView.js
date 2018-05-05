import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, red, purple, black } from '../utils/colors'

class DeckView extends Component {

	static navigationOptions = ({ navigation }) => {
		const { entryDeck } = navigation.state.params

		return {
			title: entryDeck
		}
	}

	render(){
		return(
			<View style={styles.column}>
				<View style={styles.item}>
					<Text style={{fontSize: 32}}>{this.props.deck && this.props.deck.title}</Text>
					<Text style={{fontSize: 16, color: gray}}>{this.props.deck ? this.props.deck.questions.length : 0 } cards</Text>
				</View>
	            <View>
				    <TouchableOpacity
				      	style={[styles.submitBtn, {backgroundColor: white}]}
		            	onPress={this.onAddCard}
		            >
				        <Text style={styles.submitBtnText}>Add Card</Text>
				    </TouchableOpacity>            	
				    <TouchableOpacity
				      style={[styles.submitBtn, {backgroundColor: black}]}
				      onPress={this.onStartQuiz}
				      >
				        <Text style={[styles.submitBtnText, {color: white}]}>Start Quiz</Text>
				    </TouchableOpacity>            	
	            </View>
	        </View>
		)
	}

	onAddCard = () => {
		this.props.navigation.navigate(
              'AddCardView',
              { entryDeck: this.props.deck.title }
            )
	}

	onStartQuiz = () =>{

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
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },  
  column: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  }, 
  submitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  })


function mapStateToProps (state, { navigation }) {
  const { entryDeck } = navigation.state.params

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
