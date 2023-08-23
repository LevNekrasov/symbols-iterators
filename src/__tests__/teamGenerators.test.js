/* eslint-disable linebreak-style */
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Team from '../team';

test('тестирование класса Team', () => {
  const player1 = new Daemon('Lena', 'Daemon');
  const player2 = new Bowerman('Ivan', 'Bowerman');
  const myTeam = new Team(player1, player2);

  let i = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const player of myTeam) {
    i += 1;
    if (i <= myTeam.players.length) {
      expect(player).toEqual(myTeam.players[i - 1]);
    }
  }
});
