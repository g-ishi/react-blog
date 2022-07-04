// import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

const UserHeader = ({ userId, user, fetchUser }) => {
  return (
    <div>
      UserHeader: {userId}: {user?.name}
    </div>
  );
};

// connectするコンポーネント自身の引数も参照可能
// stateからなるべく必要なデータだけを絞り込んで取得する
const mapStateToProps = ({ users }, ownProps) => {
  const user = users.find((user) => user.id === ownProps.userId);
  return {
    user,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
