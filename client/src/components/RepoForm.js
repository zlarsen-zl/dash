import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Dropdown,
  Checkbox,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addRepo } from '../actions/repos';

class RepoForm extends Component {
  state = { add: true, collaborators: [], options: [] };
  defaults = { name: '', description: '', private1: false };

  componentDidMount() {
    const options = this.props.users.map( user => (
      { key: user.username, value: user.username, text: user.username }
    ));
    this.setState({ options });
  }

  toggleAdd = () => this.setState({ add: !this.state.add });

  addRepoButton = () => (
    <Button onClick={this.toggleAdd} content='New Repo' />
  )

  handleCheckbox = () => this.setState({ private1: !this.state.private });

  handleSubmit = () => {
    const { state: { name, description, private1, collaborators }, props: { dispatch } } = this;
    const repo = { name, description, private1, collaborators };
    dispatch(addRepo(repo));
    this.setState({ ...this.defaults })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  repoForm = () => {
    const { currentValues } = this.state
    return(
      <Form onSubmit={this.handleSubmit} >
        <Form.Field>
          <Input
            autoFocus
            required
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Input
            required
            name='description'
            placeholder='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Dropdown
            options={this.state.options}
            placeholder='Choose collaborators'
            search
            selection
            fluid
            multiple
            onChange={ (e, data) => {
              this.setState({ collaborators: data.value })
            }}
          />
          <Form.Field
            control={Checkbox}
            label='Private Repo'
            name='private'
            onClick={this.handleCheckbox}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        <Button onClick={this.toggleAdd}>Cancel</Button>
      </Form>
    )
  }

  render() {
    return (
      <div>
        { this.state.add ? this.addRepoButton() : this.repoForm() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect()(RepoForm);
