// Reducers take in two things:
//    1. The action (info about what happened)
//    2. Copy of the current state

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
      //return the updated state
      console.log('Incrementing likes')
    default:
      return state;
  }
  return state;
}

export default posts;
