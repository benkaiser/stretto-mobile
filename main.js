import Exponent from 'exponent';
import React from 'react';
import {
  Navigator,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeView from './src/components/home';
import Websockets from './src/controllers/websockets';

import { Scene, Router } from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" style={styles.container}>
          <Scene key="home" component={HomeView} title="Stretto" initial={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 20,
  },
});

new Websockets();

Exponent.registerRootComponent(App);
