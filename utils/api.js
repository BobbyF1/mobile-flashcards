/*
To manage your AsyncStorage database, you'll want to create four different helper methods.
getDecks: return all of the decks along with their titles, questions, and answers. 
getDeck: take in a single id argument and return the deck associated with that id. 
saveDeckTitle: take in a single title argument and add it to the decks. 
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
*/


import { AsyncStorage } from 'react-native'

DECKS_STORAGE_KEY = 'mobile-flashcards:decksAndCards'

export function clearAllData(){
  return AsyncStorage.clear()
}

export function saveDeckTitle(title){
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))  
}

export function setDecks(decks){
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(decks))  
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  	.then(formatCalendarResults)
} 

export function formatCalendarResults (results) {
  return JSON.parse(results)
}
