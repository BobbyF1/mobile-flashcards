import { INITIAL_LOAD_DECKS } from '../actions'

function decks (state = { decks:{} }, action) {
  switch (action.type) {
    case INITIAL_LOAD_DECKS:
      console.log("Loaded")
      console.log({
        decks: action.decks
      }) 
      return {
        decks: action.decks
      }
    default :
      return state
  }
}

export default decks
