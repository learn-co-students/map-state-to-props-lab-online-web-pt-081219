import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    const users = this.props.users.map((user, index) => {
      return (<li key={index}>{user.username}</li>)
    })

    return (
      <div>
        <ul>
          {users}
        </ul>
        {this.props.numberOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length,
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
