import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    const { fetchUsers } =  this.props;
    fetchUsers();
  }

  renderUsers(){
    const { users } = this.props;
    return users.map( user => (<li key={user.id}>{user.name}</li>))
  }
  render () {
    return (
      <div>
        Here's a big list of users
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

function loadData( store ) {
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  return { users : state.users}
}

export { loadData };

export default connect(mapStateToProps,{ fetchUsers })(UsersList);