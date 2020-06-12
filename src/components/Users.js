import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {
 
  render() {
    const users = this.props.users.map(x=> <li>{x.username}</li>)
    return (
      <div>
        Number of Users: {this.props.userCount}
        <ul>
          Usernames: {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { 
    users: state.users, 
    userCount: state.users.length 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
