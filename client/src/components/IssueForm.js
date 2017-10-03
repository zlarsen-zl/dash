import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Dropdown,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addIssue } from '../actions/issues'

class IssueForm extends Component {
  state = { add: true, value: '' }
  defaults = { title: '', body: '', assignee: ''}

  toggleAdd = () => this.setState({ add: !this.state.add });

  addIssueButton = () => (
    <Button onClick={this.toggleAdd} content='New Issue' />
  )

  handleSubmit = () => {
    const { state: { title, body, assignee, value }, props: { dispatch, repo } } = this;
    const issue = { title, body, assignee, user: repo.owner.login, repo: repo.name, labels: value };
    dispatch(addIssue(issue));
    this.setState({ ...this.defaults, add: !this.state.add })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRadio = (e, { value }) => this.setState({ value })

  assigneeOptions = () => {
    const { contributors } = this.props
    return contributors.map( contributor => (
      {
        key: contributor.id,
        text: contributor.login,
        value: contributor.login,
      }
    ))
  }

  issueForm = () => {
    const { value, title, body, assignee } = this.state
    return(
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <Input
            autoFocus
            required
            name='title'
            placeholder='Issue Title'
            value={title}
            onChange={this.handleChange}
          />
          <Input
            required
            name='body'
            placeholder='body'
            value={body}
            onChange={this.handleChange}
          />
          <Dropdown
            placeholder='Select Assignee'
            fluid
            selection
            options={ this.assigneeOptions() }
            onChange={ (e, data) => {
              this.setState({ assignee: data.value })
            }}
            />
          <Form.Group inline>
            <label>Label</label>
            <Form.Radio label='Fire' value='Fire' checked={value === 'Fire'} onChange={this.handleRadio} />
            <Form.Radio label='Warm' value='Warm' checked={value === 'Warm'} onChange={this.handleRadio} />
            <Form.Radio label='Neutral' value='Neutral' checked={value === 'Neutral'} onChange={this.handleRadio} />
          </Form.Group>
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button onClick={this.toggleAdd}>Cancel</Button>
      </Form>
    )
  }

  render() {
    return (
      <div>
        { this.state.add ? this.addIssueButton() : this.issueForm() }
      </div>
    );
  }
}

export default connect()(IssueForm);
