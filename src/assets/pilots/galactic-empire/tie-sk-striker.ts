import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/sk Striker',
  xws: 'tieskstriker',
  ffg: 16,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '1KR',
    '2LR',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2PR',
    '3BW',
    '3FB',
    '3NW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  ability: {
    name: 'Adaptive Ailerons',
    text:
      'Before you reveal your dial, if you are not stressed, you <strong>must</strong> boost.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEStriker.png',
  pilots: [
    {
      name: '“Countdown”',
      caption: 'Death Defier',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'countdown',
      ability:
        'While you defend, after the Neutralize Results step, if you are not stressed, you may suffer 1 [Hit] damage and gain 1 stress token. If you do, cancel all dice results.',
      slots: ['Talent', 'Talent', 'Gunner', 'Device', 'Modification'],
      ffg: 118,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_118.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_118.jpg',
    },
    {
      name: '“Duchess”',
      caption: 'Urbane Ace',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'duchess',
      ability:
        'You may choose not to use your Adaptive Ailerons. You may use your Adaptive Ailerons even while stressed.',
      slots: ['Talent', 'Talent', 'Gunner', 'Device', 'Modification'],
      ffg: 117,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_117.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_117.jpg',
    },
    {
      name: '“Pure Sabacc”',
      caption: 'Confident Gambler',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'puresabacc',
      ability:
        'While you perform an attack, if you have 1 or fewer damage cards, you may roll 1 additional attack die.',
      slots: ['Talent', 'Gunner', 'Device', 'Modification'],
      ffg: 119,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_119.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_119.jpg',
    },
    {
      name: 'Black Squadron Scout',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'blacksquadronscout',
      text:
        'These heavily armed atmospheric craft employ their specialized moveable wings to gain additional speed and maneuverability.',
      slots: ['Talent', 'Gunner', 'Device'],
      ffg: 120,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_120.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_120.jpg',
    },
    {
      name: 'Planetary Sentinel',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'planetarysentinel',
      text:
        'To protect its many military installations, the Empire requires a swift and vigilant defense force.',
      slots: ['Gunner', 'Device', 'Modification'],
      ffg: 121,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_121.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_121.jpg',
    },
    {
      name: '“Vagabond”',
      caption: 'Destitute Demolitionist',
      initiative: 2,
      limited: 1,
      cost: 4,
      xws: 'vagabond',
      ability:
        'After you fully execute a maneuver using your Adaptive Ailerons, if you are not stressed, you may drop 1 device.',
      slots: ['Talent', 'Gunner', 'Device', 'Device', 'Modification'],
      standard: true,
      epic: true,
      ffg: 633,
      keywords: ['TIE'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/e1b12f8287593ebaf960561c2febffe4.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/308e253711036e143e22857365bcb7ca.jpg',
    },
  ],
};

export default t;
