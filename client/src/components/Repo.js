import React, { Component } from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import ShowRepo from './ShowRepo';

class Repo extends Component {

  render() {
    let { repo } = this.props;
    return(
      <Card fluid key={repo.id}>
        <Card.Content>
          <Image floated='right'
            size='mini'
            src={repo.owner.avatar_url}
          />
          <Card.Header>
            <a href={repo.html_url} target='_blank'>{repo.name}</a>
          </Card.Header>
          <Card.Meta>
            {repo.owner.login}-{repo.language}
          </Card.Meta>
          <Card.Description>
            Issues: {repo.open_issues}
            <br />
            Description: {repo.description}
          </Card.Description>
          <ShowRepo repo={repo} />
        </Card.Content>
      </Card>
    )
  }
}

export default connect()(Repo);
