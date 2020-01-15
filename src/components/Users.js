import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {
  render() {
    const users = this.props.users.map(user => (
      <ul>
        <li key={Math.random()}>{user.username} - {user.hometown}</li>
      </ul>
    ))
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.count}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = ({ users }) => {
  return {
    users, count: users.length
  }
}

// const mapStateToProps = (({ users }) => ({ users, count: users.length }))

// connect this component to Redux
export default connect(mapStateToProps)(Users)
