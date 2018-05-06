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
import DeckView from './components/DeckView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import thunk from 'redux-thunk';
import AddCardView from './components/AddCardView'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


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
    screen: Decks,
    navigationOptions: {
    tabBarLabel: 'Decks',
    tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

///////////////////////setup test data
/*
  saveDeckTitle("TestDeck")
  saveDeckTitle("TestDeckNo2")
  saveDeckTitle("Another List of Questions")
*/
///////////////////////setup test data


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
      </View>
      </Provider>
    );
  }
}

