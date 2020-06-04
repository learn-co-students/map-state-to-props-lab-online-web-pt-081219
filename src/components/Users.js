import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <p>User Count: {this.props.users.length}</p>
          <ul>
    {this.props.users.map(u => <li key={u.username}>{u.username} from {u.hometown}</li>)}
          </ul>
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
