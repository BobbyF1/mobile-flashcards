import { getDecks, setDecks } from '../utils/api'

export const INITIAL_LOAD_DECKS = 'INITIAL_LOAD_DECKS'
export const SAVED_MODIFIED_DECKS = 'SAVED_MODIFIED_DECKS'

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
    return (dispatch) => {
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
