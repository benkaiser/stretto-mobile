import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PlaylistsView from '../components/playlists_view';

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playlistPressed: (data) => {
      Actions.songs({ playlist_id: data._id, title: data.title });
    },
  };
};

export default Playlists = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistsView);
