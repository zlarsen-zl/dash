import React from 'react';
import { connect } from 'react-redux';
import RepoFeed from './RepoFeed';
import { getRepos } from '../actions/repos';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';
import { getUsers } from '../actions/users';

class FetchRepo extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getRepos(this.setLoaded));
    this.props.dispatch(getUsers());
  }

  setLoaded = () => this.setState({ loaded: true });

  render() {
    let { loaded } = this.state;
    if(loaded) {
      return (
        <div>
          <RepoFeed />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchRepo);
