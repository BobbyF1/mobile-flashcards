import React , { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { purple, white } from './utils/colors'
import decks from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import Decks from './components/Decks'
import DeckView from './components/DeckView'
import  NewDeckView from './components/NewDeckView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import thunk from 'redux-thunk';
import AddCardView from './components/AddCardView'
import QuizView from './components/QuizView'

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
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white ,
    style: {
      height: 56 + Constants.statusBarHeight,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
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
  },
   NewDeckView: {
    screen:  NewDeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
   QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
})

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

