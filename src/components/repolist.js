import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class RepoList extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 30, marginBottom: 30 }}>Loading your repo List, Please wait</Text>
          <Spinner />
        </Content>
      </Container>
    );
  }
}

export default RepoList;