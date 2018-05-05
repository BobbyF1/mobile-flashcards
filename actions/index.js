import { getDecks } from '../utils/api'

export const INITIAL_LOAD_DECKS = 'INITIAL_LOAD_DECKS'

export function loadDecks (decks) {
  return {
    type: INITIAL_LOAD_DECKS ,
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

export function addCardToDeck(deckTitle, question){
	
}
