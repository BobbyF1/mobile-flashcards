import React , { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { clearAllData, saveDeckTitle, getDecks, getDeck } from './utils/api'
import { purple, white } from './utils/colors'
import decks from './reducers'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Decks from './components/Decks'
import { TabNavigator, StackNavigator } from 'react-navigation'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {
    return createStore(
        decks,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
};

const store = configureStore();

const Tabs = TabNavigator({
  home: {
    screen: Decks
  }
})


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
          <Tabs />
      </View>
      </Provider>
    );
  }
}

