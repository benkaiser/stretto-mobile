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

import Colors from '../values/colors';

class SongsView extends React.Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.items),
    };
  }

  render() {
    var numItems = this.props.items.length;
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource}
                  enableEmptySections={true}
                  initialListSize={numItems}
                  key={ 'playlists_of_length' + numItems }
                  style={styles.listview}
                  renderRow={this.renderRow.bind(this)}
                  renderSeparator={this.renderSeperator} />
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <TouchableHighlight
        onPress={this.props.itemPressed.bind(this, rowData)}
        underlayColor='#CCCCCC' >
        <Text style={styles.text}>{rowData.title}</Text>
      </TouchableHighlight>
    );
  }

  renderSeperator(sectionId, rowId) {
    return <View key={rowId} style={styles.separator} />;
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
  listview: {
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

export default SongsView;
