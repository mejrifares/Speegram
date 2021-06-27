import {
  GET_POSTS,
  GET_ALL_POSTS,
  ADD_POST,
  LIKE_POST,
  UNLIKE_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_POST_ERRORS,
} from "../constants/actionsTypes";

import axios from "axios";

export const getPosts = (num) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .get("/postuser/", config)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, payload: array });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .post("/postuser/post/", { message: data }, config)

      .then(() => dispatch(getPosts()))
      .catch((err) => console.log(err));
  };
};

export const likePost = (postId, userId) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .patch(`/postuser/like-post/${postId}`, userId, config)

      .then((res) => {
        dispatch({ type: LIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const unlikePost = (postId, userId) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .patch(`/postuser/unlike-post/${postId}`, userId, config)
      .then((res) => {
        dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const UpdatePost = (postId, message) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .put(`/postuser/post/${postId}`, message, config)
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const DeletePost = (postId) => {
  console.log(postId);

  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .delete(`/postuser/post/${postId} `, config)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .patch(
        `/postuser/comment-post/${postId}`,
        commenterId,
        text,
        commenterPseudo,
        config
      )
      .then((res) => {
        dispatch({ type: ADD_COMMENT, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const editComment = (postId, commentId, text) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .patch(`/postuser/edit-comment-post/${postId}`, commentId, text, config)
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    return axios
      .patch(`/postuser/delete-comment-post/${postId}`, commentId, config)
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
      })
      .catch((err) => console.log(err));
  };
};
