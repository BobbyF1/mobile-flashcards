import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { gray, white, red, purple, black } from '../utils/colors'
import t from 'tcomb-form-native';
import { addCardToDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import QuizQA from './QuizQA'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

class QuizView extends Component {

	state = {
		questionNo: 1,
		correct: 0
	}

	static navigationOptions = ({ navigation }) => {
		const { entryDeck } = navigation.state.params
		return {
			title: 'Quiz - ' + entryDeck
		}
	}

	onRestart = () => {
		this.setState({
			questionNo: 1,
			correct: 0
		})
	}

	onDone = () => {
		this.props.navigation.navigate('DeckView', { entryDeck: this.props.deckTitle } )
	}

	answeredCorrectly = () => {
		this.setState( { correct: this.state.correct + 1,
						questionNo: this.state.questionNo + 1},
					() => {
						if(this.state.questionNo > this.props.deck.questions.length){
							this.resetNotificationToTomorrow()
						}						
					})
			}

	answeredIncorrectly = () => {
		this.setState( {questionNo: this.state.questionNo + 1}, 
			() => {
				if(this.state.questionNo > this.props.deck.questions.length){
					this.resetNotificationToTomorrow()
				}					
			})
		}

	//finished a quiz - so reset the alert notification to tomorrow
	resetNotificationToTomorrow(){
		clearLocalNotification();
		setLocalNotification();
	}

	render(){
		return (
	      <View >
	      	{ this.state.questionNo <= this.props.deck.questions.length 
	      	?
		      	<QuizQA 
		      		question={this.state.questionNo <= this.props.deck.questions.length 
		      					? this.props.deck.questions[this.state.questionNo - 1].question
		      					: null}
		      		answer={this.state.questionNo <= this.props.deck.questions.length 
		      					? this.props.deck.questions[this.state.questionNo - 1].answer
		      					: null}
		      		answeredCorrectly={this.answeredCorrectly}
		      		answeredIncorrectly={this.answeredIncorrectly}
		      		questionNumber={this.state.questionNo}
		      		questions={this.props.deck.questions.length}/>
		    :
		    <View style={styles.column}>
					<View style={styles.item}>
						<Text style={{fontSize: 16, color: red}}>
								Your score!
	               		</Text>
						<Text style={{fontSize: 32}}>
								{this.props.deck && this.props.deck.title}
						</Text>
						<Text style={{fontSize: 16, color: gray}}>
								{this.state.correct}/{this.props.deck.questions.length}
	               		</Text>
					</View>
					<View style={{marginTop: 100}}>
						<TouchableOpacity
					      	style={[styles.submitBtn, {backgroundColor: red}]}
			            	onPress={this.onDone} >
					        <Text>Back to Deck</Text>
					    </TouchableOpacity> 
						<TouchableOpacity
					      	style={[styles.submitBtn, {backgroundColor: red}]}
			            	onPress={this.onRestart} >
					        <Text>Restart Quiz</Text>
					    </TouchableOpacity> 
				    </View>
		    </View>
			}
	      </View>
		)
	}
}

const styles = StyleSheet.create({
  item: {
  	height: 100,
    backgroundColor: white,
    borderRadius: 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
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
  column: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  }, 
  submitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    marginTop: 20,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
});


function mapStateToProps (state, { navigation }) {
  const { entryDeck } = navigation.state.params
  return {
    deck: state.decks[entryDeck],
    deckTitle: entryDeck
  }
}

export default connect(mapStateToProps, null)(QuizView)
