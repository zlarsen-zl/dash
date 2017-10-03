import React from 'react';
import { connect } from 'react-redux';
import IssuesFeed from './IssuesFeed';
import { getIssues } from '../actions/issues';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchIssues extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getIssues(this.setLoaded));
  }

  setLoaded = () => this.setState({ loaded: true });

  render() {
    let { loaded } = this.state;
    if(loaded) {
      return (
        <IssuesFeed />
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

export default connect()(FetchIssues);
