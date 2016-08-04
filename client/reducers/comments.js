
function postComments(state = [], action){
    return state;
}

function comments(state = [], action){
  if (typeof action.postId !== 'undefined'){
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;
}

export default comments;
