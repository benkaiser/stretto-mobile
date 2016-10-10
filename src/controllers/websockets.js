window.navigator.userAgent = 'ReactNative';
const io = require('socket.io-client/socket.io');

export default class Websockets  {
  constructor() {
    console.log('test');
    const socket = io('https://personal.kaiserapps.com', {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      console.log('connected!');
      socket.emit('fetch_playlists');
      socket.emit('fetch_songs');
    });

    socket.on('playlists', (data) => {
      console.log(data.playlists[0]);
    });

    socket.on('songs', (data) => {
      console.log(data.songs[data.songs.length-1]);
    });
  }
}
