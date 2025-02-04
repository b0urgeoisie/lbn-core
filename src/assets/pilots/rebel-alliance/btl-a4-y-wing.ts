import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'BTL-A4 Y-wing',
  xws: 'btla4ywing',
  ffg: 12,
  size: 'Small',
  dial: [
    '1BB',
    '1FB',
    '1NB',
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
    '4FR',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Reload' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Y-wing.png',
  pilots: [
    {
      name: '“Dutch” Vander',
      caption: 'Gold Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'dutchvander',
      ability:
        'After you perform the [Lock] action, you may choose 1 friendly ship at range 1-3. That ship may acquire a lock on the object you locked, ignoring range restrictions.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 14,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_14.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_14.jpg',
    },
    {
      name: 'Evaan Verlaine',
      caption: 'Gold Three',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'evaanverlaine',
      ability:
        'At the start of the Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, that ship rolls 1 additional defense die while defending until the end of the round.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
        'Modification',
      ],
      ffg: 16,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_16.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_16.jpg',
    },
    {
      name: 'Gold Squadron Veteran',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'goldsquadronveteran',
      text:
        'Commanded by Jon "Dutch" Vander, Gold Squadron played an instrumental role in the Battles of Scarif and Yavin.',
      slots: ['Turret', 'Missile', 'Modification'],
      ffg: 17,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_17.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_17.jpg',
    },
    {
      name: 'Gray Squadron Bomber',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'graysquadronbomber',
      text:
        'Long after the Y-wing was phased out by the Galactic Empire, its durability, dependability, and heavy armament help it remain a staple in the Rebel fleet.',
      slots: ['Device', 'Missile', 'Modification'],
      ffg: 18,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_18.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_18.jpg',
    },
    {
      name: 'Horton Salm',
      caption: 'Gray Leader',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'hortonsalm',
      ability:
        'While you perform an attack, you may reroll 1 attack die for each other friendly ship at range 0-1 of the defender.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Missile',
        'Astromech',
        'Device',
        'Modification',
      ],
      ffg: 15,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 14,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_15.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_15.jpg',
    },
    {
      name: 'Norra Wexley',
      caption: 'Gold Nine',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'norrawexley-btla4ywing',
      ability:
        'While you defend, if there is an enemy ship at range 0-1, add 1 [Evade] result to your dice results.',
      slots: [
        'Talent',
        'Turret',
        'Torpedo',
        'Astromech',
        'Device',
        'Modification',
      ],
      ffg: 13,
      standard: true,
      epic: true,
      keywords: ['Y-wing'],
      loadout: 18,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_13.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_13.jpg',
    },
  ],
};

export default t;
