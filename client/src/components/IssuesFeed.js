import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Tab,
} from 'semantic-ui-react';
import Issue from './Issue';

class IssuesFeed extends Component {

  issues = (selector) => {
    let { issues } = this.props;
    if(selector === 'All') {
      return issues.map( issue => (
        <Issue issue={issue} key={issue.id} />
      ));
    } else {
      return issues.filter( i => (
        i.labels.map( label => (
          label.name === selector
        )).includes(true)
      )).map( issue => (
        <Issue issue={issue} key={issue.id} />
      ))
    }
  }

  render() {
    const panes = [
      { menuItem: 'All', render: () =>
        <Tab.Pane>
          {this.issues('All')}
        </Tab.Pane>
      },
      { menuItem: 'Fire', render: () =>
        <Tab.Pane>
          {this.issues('Fire')}
        </Tab.Pane>
      },
      { menuItem: 'Warm', render: () =>
        <Tab.Pane>
          {this.issues('Warm')}
        </Tab.Pane> 
      },
      { menuItem: 'Neutral', render: () =>
        <Tab.Pane>
          {this.issues('Neutral')}
        </Tab.Pane>
      },
    ]

    return(
      <div >
        <Header>Issues</Header>
        <Tab panes={panes} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  };
}

export default connect(mapStateToProps)(IssuesFeed);