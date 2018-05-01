import { INITIAL_LOAD_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case INITIAL_LOAD_DECKS:
      console.log("Loaded")
      return {
        state: action.decks
      }
    default :
      return state
  }
}

export default decks