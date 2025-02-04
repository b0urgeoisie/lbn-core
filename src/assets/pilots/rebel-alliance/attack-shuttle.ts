import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Attack Shuttle',
  xws: 'attackshuttle',
  ffg: 32,
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Evade' },
      type: 'Barrel Roll',
    },
  ],
  ability: {
    name: 'Locked and Loaded',
    text:
      'While you are docked, after your carrier ship performs a primary [Front Arc] or [Turret] attack, it may perform a bonus primary [Rear Arc] attack.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_AttackShuttle.png',
  pilots: [
    {
      name: '“Zeb” Orrelios',
      caption: 'Spectre-4',
      initiative: 2,
      limited: 1,
      cost: 3,
      xws: 'zeborrelios',
      ability:
        'While you defend, [Critical Hit] results are neutralized before [Hit] results.',
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      ffg: 37,
      standard: false,
      epic: true,
      keywords: ['Spectre'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_37.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_37.jpg',
    },
    {
      name: 'Ezra Bridger',
      caption: 'Spectre-6',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'ezrabridger',
      ability:
        'While you defend or perform an attack, if you are stressed, you may spend 1 [Force] to change up to 2 of your [Focus] results to [Evade] or [Hit] results.',
      force: { value: 1, recovers: 1, side: ['light'] },
      slots: ['Force Power', 'Turret', 'Crew', 'Modification', 'Title'],
      ffg: 36,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      keywords: ['Light Side', 'Spectre'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_36.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_36.jpg',
    },
    {
      name: 'Hera Syndulla',
      caption: 'Spectre-2',
      initiative: 5,
      limited: 1,
      cost: 4,
      xws: 'herasyndulla',
      ability:
        'After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.',
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      ffg: 34,
      standard: false,
      epic: true,
      keywords: ['Spectre'],
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_34.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_34.jpg',
    },
    {
      name: 'Sabine Wren',
      caption: 'Spectre-5',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'sabinewren',
      ability:
        'Before you activate, you may perform a [Barrel Roll] or [Boost] action.',
      slots: ['Talent', 'Turret', 'Crew', 'Modification', 'Title'],
      ffg: 35,
      standard: false,
      epic: true,
      loadout: 6,
      extended: true,
      keywords: ['Mandalorian', 'Spectre'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_35.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_35.jpg',
    },
  ],
};

export default t;
