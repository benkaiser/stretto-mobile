import Exponent from 'exponent';
import React from 'react';
import {
  ActivityIndicator,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Colors from '../values/colors';

class PlaylistsView extends React.Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.playlists),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.playlists),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.listComponent() }
      </View>
    );
  }

  listComponent() {
    var playlistLength = this.props.playlists.length;
    if (playlistLength > 0) {
      return (
        <ListView dataSource={this.state.dataSource}
                  enableEmptySections={true}
                  initialListSize={playlistLength}
                  key={ 'playlists_of_length' + playlistLength }
                  style={styles.listview}
                  renderRow={this.renderRow.bind(this)}
                  renderSeparator={this.renderSeperator} />
              );
    }

    return (
      <View>
        <Text style={styles.loading}>Loading playlists...</Text>
        <ActivityIndicator animating={true}
                           size="large"
                           style={styles.indicator} />
      </View>
      );
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={this.props.playlistPressed.bind(this, rowData)}
        underlayColor='#CCCCCC' >
        <Text style={styles.text}>{rowData.title}</Text>
      </TouchableHighlight>
    );
  }

  renderSeperator(sectionId, rowId) {
    return <View key={rowId} style={styles.separator} />;
  }

  _onPressButton(rowData) {
    console.log(rowData);
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
  indicator: {
    padding: 20,
  },
  listview: {
  },
  loading: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  text: {
    padding: 12,
    fontSize: 16,
  },
});

export default PlaylistsView;
