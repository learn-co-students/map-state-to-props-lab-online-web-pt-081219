import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  displayUsers = () => {
    return this.props.users.map((u, i) => <li key={i}>{u.username}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>{this.displayUsers()}</ul>
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
