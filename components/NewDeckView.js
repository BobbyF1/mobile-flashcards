import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, red, purple, black } from '../utils/colors'
import t from 'tcomb-form-native';
import { addCardToDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'

const formData = t.struct({
  "Name Of Deck": t.String
});

const Form = t.form.Form;

class NewDeckView extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'New Deck'
		}
	}

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: null}))
  }

	handleSubmit = () => {
		const value = this._form.getValue(); // use that ref to get the form value
		if(value && value["Name Of Deck"]){
			this.toHome()
			this.props.saveNewDeck(value["Name Of Deck"])
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
				        <Text style={[styles.submitBtnText, {color: white}]}>Submit</Text>
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
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: purple
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

function mapDispatchToProps (dispatch, { navigation }) {
  return {
  	saveNewDeck: (title) => dispatch(addDeck(title ))
  }

}

export default connect(
  null,
  mapDispatchToProps,
)(NewDeckView)
