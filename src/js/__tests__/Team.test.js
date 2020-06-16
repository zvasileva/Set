import Team from '../Team';

test.each([
  [{
    name: 'IvanD', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48,
  }, {
    name: 'IvanB', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  }, {
    name: 'IvanU', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  },
  [{
    name: 'IvanD', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48,
  }, {
    name: 'IvanB', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  }, {
    name: 'IvanU', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  }]],
])('get result', (objFirst, objSec, objThird, expected) => {
  const team = new Team();
  team.add(objFirst);
  team.add(objSec);
  team.add(objSec);
  team.addAll(objThird, objFirst, objFirst, objFirst);
  const teamMembersArr = team.toArray();
  expect(teamMembersArr).toEqual(expected);
});
