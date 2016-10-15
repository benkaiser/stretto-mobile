export const setSongs = (songs) => {
  return {
    type: 'SET_SONGS',
    songs: songs,
  };
};

export const setPlaylists = (playlists) => {
  return {
    type: 'SET_PLAYLISTS',
    playlists: playlists,
  };
};
