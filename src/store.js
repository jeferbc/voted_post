import { createStore } from 'redux';
import posts from './posts'

function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}
const reducer = (state, action) => {
  if (action.type === 'VOTE_UP'){
    let posts = state.posts;
    let index = getIndex(action.post.id,posts,'id');
    posts[index]['votes'] = posts[index].votes + 1;
    return{
      ...state,
      posts: posts
    }
  }else if(action.type === 'VOTE_DOWN'){
    let posts = state.posts;
    let index = getIndex(action.post.id,posts,'id');
    posts[index]['votes'] = posts[index].votes - 1;
    return{
      ...state,
      posts: posts
    }
  }else if(action.type === 'SORT_ASCENDENT'){
    let posts = state.posts;
    posts.sort(function (a, b) {
      return a.votes - b.votes;
    });
    return{
      ...state,
      posts: posts
    }
  }else if(action.type === 'SORT_DESCENDENT'){
    let posts = state.posts;
    posts.sort(function (a, b) {
      return b.votes - a.votes;
    });
    return{
      ...state,
      posts: posts
    }
  }
  return state;
}
export default createStore(reducer, { posts: posts });
