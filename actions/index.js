import { getDecks } from '../utils/api'

export const INITIAL_LOAD_DECKS = 'INITIAL_LOAD_DECKS'

export function loadDecks (decks) {
  return {
    type: LOAD_DECKS ,
    decks
  }
}

export function initialLoadDecks () {
    return (dispatch) => {
      getDecks()
        .then((decks) => { dispatch(loadDecks(decks) ) } )
      }
}

