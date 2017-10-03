import React, { Component } from 'react';
import {
  Header,
} from 'semantic-ui-react';
import Repo from './Repo';
import { connect } from 'react-redux';

class RepoInHouse extends Component {

  render() {
    let { repos } = this.props;
    return(
      <div >
      <Header>Repo</Header>
        <div>
        <RepoForm />
        </div>
        <Repo repos={repos}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { repos: state.repo.data};
}

export default connect(mapStateToProps)(RepoInHouse);
