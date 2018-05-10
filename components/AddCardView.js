import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, red, purple, black } from '../utils/colors'
import t from 'tcomb-form-native';
import { addCardToDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

const formData = t.struct({
  question: t.String,
  answer: t.String,
});

const Form = t.form.Form;

class AddCardView extends Component {
	handleSubmit = () => {
		const value = this._form.getValue(); // use that ref to get the form value
		if(value && value.question &&  value.answer){
			const newQuestion = { question: value.question, answer: value.answer}
			this.toHome()
			this.props.addCardToDeck(this.props.deck.title, newQuestion)
		}
	}

	toHome = () => {
//		this.props.navigation.dispatch(NavigationActions.back({key: null}))
		this.props.navigation.navigate('DeckView', { entryDeck: this.props.deck.title } )
	}

	static navigationOptions = ({ navigation }) => {
		const { entryDeck } = navigation.state.params
		return {
			title: 'Add Card - ' + entryDeck
		}
	}

	render(){
		return (
	      <View style={styles.container}>
	        <Form
	        	ref={c => this._form = c} 
	        	type={formData} /> 
				    <TouchableOpacity
				      style={[styles.submitBtn, {backgroundColor: black}]}
				      onPress={this.handleSubmit}
				      >
				        <Text style={{color: white}}>Submit</Text>
				    </TouchableOpacity>  
	      </View>
		)
	}
}

const styles = StyleSheet.create({
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
  	addCardToDeck: (title, newQuestion) => dispatch(addCardToDeck(title, newQuestion))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView)
