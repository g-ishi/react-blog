import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "./actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPosts, fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  const renderList = posts.map(({ id, userId, title, body }) => (
    <div className="item" key={id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <UserHeader userId={userId} />
      </div>
    </div>
  ));
  return (
    <>
      {console.log(posts)}
      <div className="ui relaxed divided list">{renderList}</div>
    </>
  );
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps, { fetchPosts, fetchPostsAndUsers })(
  PostList
);
