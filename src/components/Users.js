import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
    { this.props.users.map((user, i) => <li key={i}>{user.username}</li>)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
    userCount: state.users.length
  }
}


// connect this component to Redux
export default connect(mapStateToProps)(Users);
