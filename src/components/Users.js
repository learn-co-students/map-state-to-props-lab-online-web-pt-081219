import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((u, index) => <li key={index}>Name: {u.username} Hometown: {u.hometown} </li>)
    return (
      <div>
        <ul>
          Users!
          {users}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <p>{this.props.numberOfUsers} total users.</p>
      </div>
    )
  } 
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
