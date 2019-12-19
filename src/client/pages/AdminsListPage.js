import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
  componentDidMount() {
    const { fetchAdmins } =  this.props;
    fetchAdmins();
  }

  renderUsers(){
    const { admins } = this.props;
    return admins.map( admin => (<li key={admin.id}>{admin.name}</li>))
  }
  
  render () {
    return (
      <div>
        <h3>List of Admins </h3>
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({admins}) {
  return { admins };
}

export default {
  component : connect(mapStateToProps,{ fetchAdmins })(AdminsListPage),
  loadData: ({dispatch}) => dispatch(fetchAdmins())
}