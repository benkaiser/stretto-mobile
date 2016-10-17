import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SongsView from '../components/songs_view';

const mapStateToProps = (state, ownProps) => {
  let playlist = state
              .playlists
              .filter((playlist) => playlist._id == ownProps.playlist_id)[0];
  console.log(playlist);
  playlist.songs = playlist.songs.map((playlistSong) => {
    return state.songs.filter((song) => song._id == playlistSong._id)[0];
  }).filter(Boolean);

  return {
    title: playlist.title,
    items: playlist.songs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    itemPressed: (song) => {
      Actions.player({ song: song });
    },
  };
};

export default Songs = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsView);
