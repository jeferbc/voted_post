import { createStore } from 'redux';
import posts from './posts'
const reducer = (state, action) => {
  if (action.type === 'VOTE_UP'){
    let posts = state.posts;
    posts[action.post.id - 1]['votes'] = posts[action.post.id-1].votes + 1;
    return{
      ...state,
      posts: posts
    }
  }else if(action.type === 'VOTE_DOWN'){
    let posts = state.posts;
    posts[action.post.id - 1]['votes'] = posts[action.post.id-1].votes - 1;
    return{
      ...state,
      posts: posts
    }
  }
  return state;
}
export default createStore(reducer, { posts: posts });
