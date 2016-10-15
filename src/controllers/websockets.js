import { setSongs, setPlaylists } from '../actions';

window.navigator.userAgent = 'ReactNative';
const io = require('socket.io-client/socket.io');

export default class Websockets  {
  constructor(store) {
    console.log('test');
    const socket = io('https://personal.kaiserapps.com', {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      socket.emit('fetch_playlists');
      socket.emit('fetch_songs');
    });

    socket.on('playlists', (data) => {
      store.dispatch(setPlaylists(data.playlists));
    });

    socket.on('songs', (data) => {
      store.dispatch(setSongs(data.songs));
    });
  }
}
