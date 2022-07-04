import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// BFF的なaction creatorを作成する
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // action creatorからaction creatorを呼び出すときはこんな感じにする
  await dispatch(fetchPosts());
  const userIds = _.map(getState().posts, "userId");
  const uniqUserIds = _.uniq(userIds);

  // こっちはawaitする必要ない。この処理に依存する後続の処理がないから。
  uniqUserIds.forEach((userId) => {
    dispatch(fetchUser(userId));
  });
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);
  console.log("fetch user call: ", data);
  dispatch({
    type: "FETCH_USER",
    payload: data,
  });
};
