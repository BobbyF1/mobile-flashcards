import { INITIAL_LOAD_DECKS, SAVED_MODIFIED_DECKS } from '../actions'

function decks (state = { decks:{} }, action) {
  switch (action.type) {
    case INITIAL_LOAD_DECKS:
      return {
        decks: action.decks
      }
    case SAVED_MODIFIED_DECKS:
      return {
       decks: action.decks
      }
    default :
      return state
  }
}

export default decks
