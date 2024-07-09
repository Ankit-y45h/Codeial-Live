import { UPDATE_POSTS } from './actionTypes';

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
export function fetchPosts() {
  return (dispatch) => {
    const url = 'https://dummyjson.com/posts?limit=5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  }
}



