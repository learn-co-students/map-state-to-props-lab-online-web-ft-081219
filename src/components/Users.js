import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {
  render() {
    debugger
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!  {this.props.numberOfUsers}
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger
  return {users: state.users, numberOfUsers: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
