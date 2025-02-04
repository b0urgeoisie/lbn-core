import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/ph Phantom',
  xws: 'tiephphantom',
  ffg: 27,
  size: 'Small',
  dial: [
    '1TW',
    '1BW',
    '1NW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Cloak' },
  ],
  ability: {
    name: 'Stygium Array',
    text:
      'After you decloak, you may perform an [Evade] action. At the start of the End Phase, you may spend 1 evade token to gain 1 cloak token.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEPhantom.png',
  pilots: [
    {
      name: '“Echo”',
      caption: 'Slippery Trickster',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'echo',
      ability:
        'While you decloak, you must use the (2 [Bank Left]) or (2 [Bank Right]) template instead of the (2 [Straight]) template.',
      slots: ['Talent', 'Talent', 'Sensor', 'Gunner', 'Modification'],
      ffg: 132,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 11,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_132.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_132.jpg',
    },
    {
      name: '“Whisper”',
      caption: 'Soft-Spoken Slayer',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'whisper',
      ability: 'After you perform an attack that hits, gain 1 evade token.',
      slots: ['Talent', 'Sensor', 'Gunner', 'Modification', 'Modification'],
      ffg: 131,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_131.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_131.jpg',
    },
    {
      name: 'Imdaar Test Pilot',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'imdaartestpilot',
      text:
        'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom achieves what many thought was impossible: a small starfighter equipped with an advanced cloaking device.',
      slots: ['Sensor', 'Gunner', 'Modification'],
      ffg: 134,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_134.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_134.jpg',
    },
    {
      name: 'Sigma Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 6,
      xws: 'sigmasquadronace',
      text:
        'Featuring a hyperdrive and shields, the TIE phantom is also equipped with five laser cannons, giving it substantial firepower for an Imperial fighter.',
      slots: ['Talent', 'Sensor', 'Gunner', 'Modification'],
      ffg: 133,
      standard: false,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_133.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_133.jpg',
    },
  ],
};

export default t;
