import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Firespray-class Patrol Craft',
  xws: 'firesprayclasspatrolcraft',
  size: 'Medium',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3BW',
    '3FB',
    '3NW',
    '3RR',
    '4FW',
    '4KR',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { arc: 'Rear Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_FIrespray.png',
  pilots: [
    {
      name: 'Jango Fett',
      caption: 'Simple Man',
      initiative: 6,
      limited: 1,
      xws: 'jangofett',
      ability:
        "While you defend or perform a primary attack, if the difficulty of your revealed maneuver is less than that of the enemy ship's, you may change 1 of the enemy ship's [Focus] results to a blank result.",
      standard: true,
      epic: true,
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Illicit',
        'Modification',
        'Title',
      ],
      cost: 8,
      ffg: 800,
      loadout: 27,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/d4/f0/d4f09efe-f07f-45ad-a82f-8fdc29ec8f75/swz82_a1_jango-fett.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b6d21423ce39d0a57330782ac9f37e24.jpg',
    },
    {
      xws: 'zamwesell',
      name: 'Zam Wesell',
      caption: 'Clawdite Changeling',
      cost: 9,
      initiative: 5,
      limited: 1,
      ability:
        'Setup: Lose 2 [Charge]. During the System Phase, you may assign 1 of your secret conditions to yourself facedown: "You Should Thank Me" or "You\'d Better Mean Business"',
      slots: [
        'Talent',
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      conditions: ['youdbettermeanbusiness', 'youshouldthankme'],
      standard: true,
      epic: true,
      ffg: 801,
      loadout: 22,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/08/f3/08f343b7-9d01-4e1f-91d8-e6eca0eb4fe0/swz82_a1_zam-wessel.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/99cf31dd1b9dc66bb0bd9522aacea4ce.jpg',
    },
    {
      xws: 'bobafett-separatistalliance',
      ffg: 802,
      name: 'Boba Fett',
      cost: 7,
      limited: 1,
      initiative: 3,
      caption: 'Survivor',
      slots: [
        'Cannon',
        'Missile',
        'Crew',
        'Device',
        'Illicit',
        'Modification',
        'Title',
      ],
      standard: true,
      epic: true,
      ability:
        'While you defend, if there are no other friendly ships at range 0-2, you may change 1 of your blank results to a [Focus] result.',
      loadout: 16,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/17/5d/175d51c6-6a7a-4f59-b8c1-44417a746187/swz82_a1_boba-fett.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3b76c2f168aa5b6644c9d270200a3ef1.jpg',
    },
    {
      name: 'Separatist Racketeer',
      xws: 'separatistracketeer',
      initiative: 2,
      limited: 0,
      text:
        'Emboldened by the bitter stalemate of the Outer Rim Sieges, mercenary groups across the galaxy take the opportunity to profit from the ongoing war.',
      standard: true,
      slots: ['Cannon', 'Missile', 'Device'],
      cost: 7,
      epic: true,
      ffg: 803,
      loadout: 10,
      extended: true,
      image:
        'https://images-cdn.fantasyflightgames.com/filer_public/16/8c/168ca8f4-0015-44a3-9a7c-099caff70881/swz82_a1_separatist-racketeer.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/fd061204d3235827f2457d5be76cc18b.jpg',
    },
  ],
  ffg: 10,
};

export default t;
