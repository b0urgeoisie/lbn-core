import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'StarViper-class Attack Platform',
  xws: 'starviperclassattackplatform',
  ffg: 3,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1FB',
    '1NB',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3BW',
    '3FB',
    '3NW',
    '3PR',
    '4FW',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'Red', type: 'Focus' },
      type: 'Boost',
    },
  ],
  ability: {
    name: 'Microthrusters',
    text:
      'While you perform a barrel roll, you must use the [Bank Left] or [Bank Right] template instead of the [Straight] template.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_StarViper.png',
  pilots: [
    {
      name: 'Black Sun Assassin',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'blacksunassassin',
      text:
        'Although assassinations can be handled with a shot in the dark or a dire substance added to a drink, a flaming shuttle tumbling from the sky sends a special kind of message.',
      slots: ['Tech'],
      ffg: 181,
      standard: false,
      epic: true,
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_181.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_181.jpg',
    },
    {
      name: 'Black Sun Enforcer',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'blacksunenforcer',
      text:
        'Prince Xizor himself collaborated with MandalMotors to design the StarViper-class attack platform, one of the most formidable starfighters in the galaxy.',
      slots: ['Tech'],
      ffg: 182,
      standard: false,
      epic: true,
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_182.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_182.jpg',
    },
    {
      name: 'Dalan Oberos',
      caption: 'Elite Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'dalanoberos-starviperclassattackplatform',
      ability:
        'After you fully execute a maneuver, you may gain 1 stress token to rotate your ship 90°.',
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification'],
      ffg: 179,
      standard: false,
      epic: true,
      loadout: 10,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_179.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_179.jpg',
    },
    {
      name: 'Guri',
      caption: 'Prince Xizor’s Bodyguard',
      initiative: 5,
      limited: 1,
      cost: 7,
      xws: 'guri',
      ability:
        'At the start of the Engagement Phase, if there is at least 1 enemy ship at range 0-1, you may gain 1 focus token.',
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'White', type: 'Lock' },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Barrel Roll',
        },
        {
          difficulty: 'White',
          linked: { difficulty: 'Red', type: 'Calculate' },
          type: 'Boost',
        },
      ],
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      ffg: 178,
      standard: false,
      epic: true,
      keywords: ['Droid'],
      loadout: 20,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_178.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_178.jpg',
    },
    {
      name: 'Prince Xizor',
      caption: 'Black Sun Kingpin',
      initiative: 4,
      limited: 1,
      cost: 5,
      xws: 'princexizor',
      ability:
        'While you defend, after the Neutralize Results step, another friendly ship at range 0-1 and in the attack arc may suffer 1 [Hit] or [Critical Hit] damage. If it does, cancel 1 matching result.',
      slots: ['Talent', 'Tech', 'Torpedo', 'Modification', 'Title'],
      ffg: 180,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_180.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_180.jpg',
    },
  ],
};

export default t;
