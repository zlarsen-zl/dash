import React, { Component } from 'react';
import { Header, Tab } from 'semantic-ui-react';
import RepoForm from './RepoForm';
import Repo from './Repo';
import { connect } from 'react-redux';

class RepoFeed extends Component {

  repos = (selector) => {
    const { repos } = this.props;
    if(selector === 'all') {
      return repos.map( repo => (
        <Repo key={repo.id} repo={repo} />
      ));
    } else {
      const isPrivate = selector === 'private';
      return repos.filter( r => r.private === isPrivate).map( repo => (
        <Repo key={repo.id} repo={repo} />
      ));
    }
  }

  repoAdd = () => {
    const { user, users } = this.props;
      return(
        <div>
          {
            user.role === 'admin' ?
            <RepoForm users={users} />
            :
            null
          }
        </div>
      )
    }

  render() {
    const panes = [
      { menuItem: 'All', render: () =>
        <Tab.Pane>
          {this.repos('all')}
        </Tab.Pane>
      },
      { menuItem: 'Inhouse', render: () =>
        <Tab.Pane>
          {this.repos('inhouse')}
        </Tab.Pane>
      },
      { menuItem: 'Private', render: () =>
        <Tab.Pane>
          {this.repos('private')}
        </Tab.Pane> },
    ]

    return(
      <div >
        <Header>Repo</Header>
          {this.repoAdd()}
        <Tab panes={panes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos,
    users: state.users,
    user: state.user,
  };
}

export default connect(mapStateToProps)(RepoFeed);
