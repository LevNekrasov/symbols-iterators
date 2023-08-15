/* eslint-disable linebreak-style */
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Team from '../team';

test('тестирование класса Team', () => {
  const player1 = new Daemon('Lena');
  const player2 = new Bowerman('Ivan');
  const myTeam = new Team(player1, player2);

  const iterator = myTeam[Symbol.iterator]();
  for (let i = 0; i <= myTeam.players.length; i += 1) {
    expect(iterator.next().value).toEqual(myTeam.players[i]);
  }
});
