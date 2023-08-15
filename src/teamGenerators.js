/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
export default class TeamGenerators {
  constructor(...players) {
    this.players = players;
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this.players.length; index += 1) {
      yield this.players[index];
    }
  }
}
