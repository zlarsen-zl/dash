import React, { Component } from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';

class Issue extends Component {
  state = { issues: [] };

  labels = (labels) => {
    let color;
    labels.forEach( label => {
      if(label.name === 'Fire')
        color = 'red';
      else if (label.name === 'Warm')
        color = 'yellow';
      else if (label.name === 'Neutral')
        color = 'blue';
      else
        color = 'black';
    });
    return color;
  }

  render() {
    const { issue } = this.props;
    return (
      <Card fluid color={this.labels(issue.labels)}>
        <Card.Content>
          <Card.Header>
            <a href={issue.html_url} target='_blank'>{issue.title}</a>
            <Image
              floated='right'
              size='mini'
              shape='circular'
              src={issue.assignee.avatar_url}
            />
          </Card.Header>
          <Card.Meta>
            {issue.repository.name}
          </Card.Meta>
          <Card.Description>
            Assignee: {issue.assignee.login}
            <br />
            Description: {issue.body}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Issue;
