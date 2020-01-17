import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br></br>
          { this.props.users.map(user => <li>{user.username}</li>) }
          { this.props.userCount }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return { users: state.users, userCount: state.users.length };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
