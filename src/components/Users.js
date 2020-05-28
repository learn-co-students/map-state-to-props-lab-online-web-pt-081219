import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          <ul className="UserList">
            {this.props.users.map(user => { return (<li>{user.username}</li>) })}
          </ul>
          {/* In addition, display the total number of users curently in the store */}
          <p className="TotalUsersNumber">{ this.props.userCount }</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
// export default Users
export default connect(mapStateToProps)(Users);
