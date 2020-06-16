import Daemon from '../Daemon';

test.each([
  ['Ivan', 'Daemon', {
    name: 'Ivan', type: 'Daemon', health: 100, level: 2, attack: 12, defence: 48,
  }],
])('get result', (name, type, expected) => {
  const result = new Daemon(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
