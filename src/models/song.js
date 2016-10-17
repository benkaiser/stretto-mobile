export default class Song  {
  constructor(data) {
    this.data = data;
  }

  get(key) {
    return this.data[key];
  }
}
