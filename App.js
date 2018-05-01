import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { clearAllData, saveDeckTitle, getDecks, getDeck } from './utils/api'
import { purple, white } from './utils/colors'
import decks from './reducers'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import { Constants } from 'expo'
import { initialLoadDecks } from './actions'
import { connect } from 'react-redux'

function LocalStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class App extends Component {

  componentDidMount(){
    this.props.initialDataLoad()
  }

  render() {

    return (
      <Provider store={createStore(decks)}>
      <View style={{flex: 1}}>
          <LocalStatusBar backgroundColor={purple} barStyle="light-content" />
          <Text>Open up App.js to start working on your app!!!!</Text>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


// function mapStateToProps({decks}){
//   return {}
// }

// function mapDispatchToProps(dispatch) {
//     return {
//       initialDataLoad: () => dispatch(initialLoadDecks())
//   }
// }

export default connect()(App)

