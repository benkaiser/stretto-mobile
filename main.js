import Exponent from 'exponent';
import React from 'react';
import {
  Navigator,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import HomeView from './src/components/home';
import Playlists from './src/containers/playlists.js';
import Songs from './src/containers/songs.js';
import Websockets from './src/controllers/websockets';
import StrettoApp from './src/reducers';

const RouterWithRedux = connect()(Router);

let store = createStore(StrettoApp);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" style={styles.container}>
            <Scene key="home" component={HomeView} title="Stretto" />
            <Scene key="playlists" component={Playlists} title="Stretto" initial={true} />
            <Scene key="songs" component={Songs} title="Songs" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 20,
  },
});

new Websockets(store);

Exponent.registerRootComponent(App);
