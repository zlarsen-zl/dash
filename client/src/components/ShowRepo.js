import React, { Component } from 'react';
import {
  Button,
  Card,
  Image,
  Modal,
  Header,
  Grid,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import IssueForm from './IssueForm';
import Issue from './Issue';
import axios from 'axios';
import { getRepoContribs, getRepoCollabs } from '../actions/repos';
import { getPulls } from '../actions/pulls';

class ShowRepo extends Component {

  handleClick = () => {
    const repo = { name: this.props.repo.name }
    this.props.dispatch(getRepoContribs(repo))
    this.props.dispatch(getRepoCollabs(repo))
    this.props.dispatch(getPulls(repo))
  };

  issues = (repos) => {
    const { issue } = this.props;
    const visible = issue.filter( issue => repos.name === issue.repository.name )
    if(visible.length === 0 )
      return(<Header>No Issues</Header>)

    return visible.map( issue => {
      return(
        <Issue key={issue.id} issue={issue} />
      )
    })
  }

  issueAdd = (repos, contributors) => {
    const { user, dispatch, history } = this.props;
    return(
      <div>
        {
          user.role === 'observer' ?
          null
          :
          <IssueForm repo={repos} contributors={contributors}/>
        }
      </div>
    )
  }

  contributors = () => {
    const { contributors } = this.props
    if(contributors.length === 0 )
      return(<Segment basic>No Contributors Found.</Segment>)

    return contributors.map( contributors => (
      <Segment basic>
        <Image floated='left'
          size='mini'
          src={contributors.avatar_url}
        />
        <span/>
        {contributors.login}
      </Segment>
    ))
  }

  collaborators = () => {
    const { collaborators } = this.props
    if( collaborators.length === 0 )
      return(<Segment basic>No collaborators Found.</Segment>)

    return collaborators.map( collaborators => (
      <Segment basic>
        <Image floated='left'
          size='mini'
          src={collaborators.avatar_url}
        />
        <span/>
        {collaborators.login}
      </Segment>
    ))
  }

  pulls = () => {
    const { pulls } = this.props

    if(pulls.length === 0 )
      return(<Segment basic>No Pull Requests!</Segment>)

    return pulls.map( pulls => (
      <Segment basic key={pulls.id}>
        <Image floated='left'
          size='mini'
          src={pulls.user.avatar_url}
        />
        <span/>
        <a href={pulls.html_url} target='_blank'>{pulls.title}</a>
        <br/>
        {pulls.body}
      </Segment>
    ))
  }

  render() {
    const { repo, contributors } = this.props

    return(
      <Modal
        size="fullscreen"
        trigger={<Button onClick={this.handleClick}>Show More</Button>}
      >
        <Modal.Header>
          <a href={repo.html_url} target='_blank'>{repo.name}</a>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column only='computer' computer={8}>
                  Created: {repo.created_at}
                  <br />
                  Description: {repo.description ? repo.description : 'No Description'}
                  <br />
                  <Grid columns={2}>
                    <Grid.Column>
                      Collaborators: {this.collaborators()}
                    </Grid.Column>
                    <Grid.Column>
                      Pull Requests: {this.pulls()}
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
                <Grid.Column computer={8} mobile={16}>
                  <Header>Issues: {repo.open_issues}</Header>
                  {this.issues(repo)}
                  {this.issueAdd(repo, contributors)}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    issue: state.issues,
    contributors: state.contributors,
    collaborators: state.collaborators,
    pulls: state.pulls,
    user: state.user,
  };
}

export default connect(mapStateToProps)(ShowRepo);
