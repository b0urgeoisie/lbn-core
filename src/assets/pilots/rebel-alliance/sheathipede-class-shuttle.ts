import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Sheathipede-class Shuttle',
  xws: 'sheathipedeclassshuttle',
  ffg: 8,
  size: 'Small',
  dial: [
    '1SR',
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3KR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { arc: 'Rear Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Coordinate' },
  ],
  ability: {
    name: 'Comms Shuttle',
    text:
      'While you are docked, your carrier ship gains [Coordinate]. Before your carrier ship activates, it may perform a [Coordinate] action.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Sheathipede.png',
  pilots: [
    {
      name: '“Zeb” Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'zeborrelios-sheathipedeclassshuttle',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      ffg: 40,
      standard: true,
      epic: true,
      keywords: ['Spectre'],
      loadout: 11,
      extended: true,
    },
    {
      name: 'AP-5',
      caption: 'Escaped Analyst Droid',
      initiative: 1,
      limited: 1,
      cost: 4,
      xws: 'ap5',
      ability:
        'While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Coordinate' },
      ],
      slots: ['Crew', 'Astromech', 'Modification', 'Title'],
      ffg: 41,
      standard: true,
      epic: true,
      keywords: ['Droid', 'Spectre'],
      loadout: 4,
      extended: true,
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'ezrabridger-sheathipedeclassshuttle',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade]/[Hit] results.',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Crew', 'Astromech', 'Modification', 'Title', 'Force Power'],
      ffg: 39,
      standard: true,
      epic: true,
      keywords: ['Light Side', 'Spectre'],
      loadout: 6,
      extended: true,
    },
    {
      name: 'Fenn Rau',
      caption: 'Reluctant Rebel',
      initiative: 6,
      limited: 1,
      cost: 4,
      xws: 'fennrau-sheathipedeclassshuttle',
      ability:
        'Before an enemy ship in your firing arc engages, if you are not stressed, you may gain 1 stress token. If you do, that ship cannot spend tokens to modify dice while it performs an attack during this phase.',
      slots: ['Talent', 'Crew', 'Astromech', 'Modification', 'Title'],
      ffg: 38,
      standard: true,
      epic: true,
      keywords: ['Mandalorian', 'Spectre'],
      loadout: 9,
      extended: true,
    },
  ],
};

export default t;
