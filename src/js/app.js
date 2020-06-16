// TODO: write your code here
import sum from './basic';

import Bowerman from './Bowerman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import Team from './Team';

console.log('worked');

console.log(sum([1, 2]));

const bowerman = new Bowerman('IvanBow', 'Bowerman');

bowerman.levelUp();

console.log(bowerman);

const swordsman = new Swordsman('IvanSw', 'Swordsman');

swordsman.levelUp();

console.log(swordsman);

const magician = new Magician('IvanM', 'Magician');

magician.levelUp();

console.log(magician);

const undead = new Undead('IvanUnd', 'Undead');

undead.levelUp();

console.log(undead);

const zombie = new Zombie('IvanZ', 'Zombie');

zombie.levelUp();

console.log(zombie);

const daemon = new Daemon('IvanD', 'Daemon');

daemon.levelUp();

console.log(daemon);

const team = new Team();

team.add(daemon);

team.add(daemon);

team.add(zombie);

team.addAll(zombie, zombie, daemon, undead, magician, magician, swordsman);

const teamMembersArr = team.toArray();

console.log(teamMembersArr);
