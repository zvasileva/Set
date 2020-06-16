import Magician from '../Magician';

test.each([
  ['Ivan', 'Magician', {
    name: 'Ivan', type: 'Magician', health: 100, level: 2, attack: 12, defence: 48,
  }],
])('get result', (name, type, expected) => {
  const result = new Magician(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
