import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { gray, white, red, black  } from '../utils/colors'
import { MaterialIcons  } from '@expo/vector-icons'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

const propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  answeredCorrectly: PropTypes.func.isRequired,
  answeredIncorrectly: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  questions: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    QAText: {
      fontSize: 30, 
      marginTop: 20,
      textAlign: 'center'
    },
    questionView: {
        display: 'flex',
        flex: 1,
        alignItems: 'center'
    },
    btnCorrect: {
        backgroundColor: '#008000',
        padding: 5,
        borderRadius: 3,
        height: 48,
        margin: 45,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnIncorrect: {
      backgroundColor: '#ff0000',
      padding: 5,
      borderRadius: 3,
      height: 48,
      margin: 45,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnViewAnswer:{
      backgroundColor: '#f5deb3',
      padding: 5,
      borderRadius: 3,
      height: 48,
      margin: 45,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
      container: {
      padding: 5,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20
  },

  buttonRow: {
    flexDirection: 'row',
    marginTop: 5
  },

  })

class QuizQA extends Component {

  state={
    display: "question"
  }

  componentWillReceiveProps(nextProps){
    if(this.props.question!==nextProps.question){
      this.setState({display: "question"})
    }
  }

  render(){
    return (
      <View style={styles.questionView}>
        <Text> Q {this.props.questionNumber} / {this.props.questions} </Text>
        <Text style={styles.QAText}>
          { this.state.display==="question" ?
            this.props.question
          :
          this.props.answer
          }
        </Text>
        { this.state.display==="question" 
          ?
          <TouchableOpacity
            style={[styles.btnViewAnswer, {backgroundColor: black}]}
            onPress={() => 
                this.setState({display: "answer"}) 
              }>
              <Text style={[styles.submitBtnText, {color: white}]}>Answer...</Text>
          </TouchableOpacity>  
          :
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.btnCorrect}
              onPress={this.props.answeredCorrectly} >
                <Text style={[styles.submitBtnText, {color: white}]}>Correct</Text>
            </TouchableOpacity>  
            <TouchableOpacity
              style={styles.btnIncorrect}
              onPress={this.props.answeredIncorrectly } >
                <Text style={[styles.submitBtnText, {color: white}]}>Incorrect</Text>
            </TouchableOpacity>  
          </View>
        }
      </View>
    )
  }
}

export default connect(
  null,
  null,
)(QuizQA)
