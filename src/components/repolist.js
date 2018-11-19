import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';

class RepoList extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <MapView
        style={styles.map} 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = {
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
  },
  text: {
      fontSize: 30,
      fontWeight: '700',
      color: '#59656C',
      marginBottom: 10,
  },
  map: {
      width: '100%',
      height: '100%',
      flex: 1
  }
};

export default RepoList;