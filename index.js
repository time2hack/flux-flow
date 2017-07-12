module.exports = class Store {
  constructor() {
    this._state = {};
    this._eventCallbacks = [];
    this._eventMap = [];
  }

  setState(partialState) {
    this._state = Object.assign({}, this._state, partialState);
  }
  
  get state() {
    return this._state;
  }

  on(topLevelKeyArray, callback) {
    const index = this._eventMap.push(topLevelKeyArray);
    this._eventCallbacks[index] = topLevelKeyArray;
  }
}
