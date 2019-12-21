import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */


// add any needed imports here

class Users extends Component {
  mapuser = () =>{
    console.log(this.props.users)
    const users = this.props.users
    return users.map(e => {return(<li>{e.username}</li>)})
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.mapuser()}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // console.log(state)
  return {users: state.users, userCount: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
