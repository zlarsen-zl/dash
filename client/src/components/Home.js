import React, { Component } from 'react';
import FetchRepo from './FetchRepo';
import FetchIssues from './FetchIssues';
import { Grid } from 'semantic-ui-react';

class Home extends Component {

  render() {
    return(
      <Grid divided='vertically'>
        <Grid.Row columns={2} >
          <Grid.Column computer={8} mobile={16}>
            <FetchRepo />
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <FetchIssues />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
