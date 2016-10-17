import Exponent from 'exponent';
import React from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const { Video } = Exponent.Components;

import Colors from '../values/colors';
import Song from '../models/song';

class PlayerView extends React.Component {
  render() {
    console.log(this.source());
    return (
      <View style={styles.container}>
        <Video onError={this._onError}
               source={ this.source() }
               volume={1.0} />
      </View>
    );
  }

  source() {
    console.log(this.props);
    return {
      uri: `https://personal.kaiserapps.com/songs/${this.props.song.get('_id')}`,
    };
  }

  _onError(error) {
    console.log(error);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 55,
  },
});

export default PlayerView;
