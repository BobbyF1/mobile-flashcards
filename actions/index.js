import { getDecks, setDecks, clearAllData } from '../utils/api'

export const INITIAL_LOAD_DECKS = 'INITIAL_LOAD_DECKS'
export const SAVED_MODIFIED_DECKS = 'SAVED_MODIFIED_DECKS'
export const RESET_DECKS = 'RESET_DECKS'

export function resetStoreDecks() {
  return {
    type: RESET_DECKS,
    decks: {}
  }
}

export function loadDecks (decks) {
  return {
    type: INITIAL_LOAD_DECKS ,
    decks
  }
}

export function savedModifiedDecks (decks) {
  return {
    type: SAVED_MODIFIED_DECKS ,
    decks
  }
}

export function initialLoadDecks () {
  return (dispatch, getState) => {
      return getDecks()
        .then((decks) => { dispatch(loadDecks(decks) ) } )
        .catch((error) => { console.log(error) } )
      }
}

export function addCardToDeck(deckTitle, newQuestion){
  return (dispatch, getState) => {
  	const copiedDecks = JSON.parse(JSON.stringify(getState().decks)); 
  	copiedDecks[deckTitle].questions.push(newQuestion);
    return setDecks(copiedDecks)
        .then(() => { dispatch(savedModifiedDecks(copiedDecks) ) } )
        .catch((error) => { console.log(error) } )
  }
}

export function addDeck(deckTitle){
  return (dispatch, getState) => {
    const copiedDecks = JSON.parse(JSON.stringify(getState().decks)); 
    copiedDecks[deckTitle] = {
      title: deckTitle,
      questions: []
    }
    return setDecks(copiedDecks)
        .then(() => { dispatch(savedModifiedDecks(copiedDecks) ) } )
        .catch((error) => { console.log(error) } )
  }  
}

export function resetDecks(){
  return (dispatch, getState) => {
    return clearAllData()
      .then(() => { dispatch(resetStoreDecks()) } )
      .catch((error) => { console.log(error) } )
  }  
}
