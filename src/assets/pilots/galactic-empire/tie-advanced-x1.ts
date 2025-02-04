import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE Advanced x1',
  xws: 'tieadvancedx1',
  ffg: 13,
  size: 'Small',
  dial: [
    '1BB',
    '1FW',
    '1NB',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3ER',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3RR',
    '4FW',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Barrel Roll' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: 'Advanced Targeting Computer',
    text:
      'While you perform a primary attack against a defender you have locked, roll 1 additional attack die and change 1 [Hit] result to a [Critical Hit] result.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEAdvanced.png',
  pilots: [
    {
      name: 'Darth Vader',
      caption: 'Black Leader',
      initiative: 6,
      limited: 1,
      cost: 7,
      xws: 'darthvader',
      ability:
        'After you perform an action, you may spend 1 [Force] to perform an action.',
      force: { value: 3, recovers: 1, side: ['dark'] },
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Tech',
        'Sensor',
        'Missile',
        'Modification',
        'Modification',
      ],
      ffg: 93,
      standard: true,
      epic: true,
      loadout: 21,
      extended: true,
      keywords: ['Dark Side', 'Sith', 'TIE'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_93.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_93.jpg',
    },
    {
      name: 'Maarek Stele',
      caption: 'Servant of the Empire',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'maarekstele',
      ability:
        'While you perform an attack, if the defender would be dealt a faceup damage card, instead draw 3 damage cards, choose 1, and discard the rest.',
      slots: ['Talent', 'Talent', 'Sensor', 'Missile', 'Modification'],
      ffg: 94,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_94.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_94.jpg',
    },
    {
      name: 'Storm Squadron Ace',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'stormsquadronace',
      text:
        'The TIE Advanced x1 was produced in limited quantities, but Sienar engineers incorporated many of its best qualities into their next TIE model: the TIE Interceptor.',
      slots: ['Talent', 'Sensor', 'Modification'],
      ffg: 97,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 2,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_97.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_97.jpg',
    },
    {
      name: 'Tempest Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'tempestsquadronpilot',
      text:
        'The TIE Advanced improved on the popular TIE/ln design by adding shielding, better weapons systems, curved solar panels, and a hyperdrive.',
      slots: ['Sensor', 'Modification'],
      ffg: 98,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_98.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_98.jpg',
    },
    {
      name: 'Ved Foslo',
      caption: 'Ambitious Engineer',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'vedfoslo',
      ability:
        'While you execute a maneuver, you may execute a maneuver of the same bearing and difficulty of a speed 1 higher or lower instead.',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification'],
      ffg: 95,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_95.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_95.jpg',
    },
    {
      name: 'Zertik Strom',
      caption: 'Pitiless Administrator',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'zertikstrom',
      ability:
        "During the End Phase, you may spend a lock you have on an enemy ship to expose 1 of that ship's damage cards.",
      slots: ['Sensor', 'Missile', 'Modification'],
      ffg: 96,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_96.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_96.jpg',
    },
  ],
};

export default t;
