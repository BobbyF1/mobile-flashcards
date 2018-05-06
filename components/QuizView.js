import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, red, purple, black } from '../utils/colors'
import t from 'tcomb-form-native';
import { addCardToDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import QuizQA from './QuizQA'

class QuizView extends Component {

	state = {
		questionNo: 1,
		correct: 0
	}

	static navigationOptions = ({ navigation }) => {
		console.log("navigationOptions")
		console.log(navigation.state)
		const { entryDeck } = navigation.state.params
		return {
			title: 'Quiz - ' + entryDeck
		}
	}

	answeredCorrectly = () => {
		this.setState( { correct: this.state.correct + 1,
					questionNo: this.state.questionNo + 1})
	}

	answeredIncorrectly = () => {
		this.setState( {questionNo: this.state.questionNo + 1})
	}


	render(){
		return (
	      <View style={styles.questionView}>
	      	{ this.state.questionNo <= this.props.deck.questions.length 
	      	?
		      	<QuizQA 
		      		question={this.props.deck.questions[this.state.questionNo - 1].question}
		      		answer={this.props.deck.questions[this.state.questionNo - 1].answer}
		      		answeredCorrectly={this.answeredCorrectly}
		      		answeredIncorrectly={this.answeredIncorrectly}
		      		questionNumber={this.state.questionNo}
		      		questions={this.props.deck.questions.length}/>
		    :
		    	<Text>Finished</Text>
			}
	      </View>
		)
	}
}

const styles = StyleSheet.create({

    btnNext:{
        backgroundColor: '#f67565',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 45,
        width: 100
    },
    numberCards:{
        padding: 50
    }
});


function mapStateToProps (state, { navigation }) {
  const { entryDeck } = navigation.state.params
  return {
    deck: state.decks[entryDeck],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  return {
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizView)
