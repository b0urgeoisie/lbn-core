import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Scurrg H-6 bomber',
  xws: 'scurrgh6bomber',
  ffg: 4,
  size: 'Medium',
  dial: [
    '1BB',
    '1FB',
    '1NB',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '3ER',
    '3TR',
    '3BW',
    '3FW',
    '3NW',
    '3YR',
    '3RR',
    '4FR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 6 },
    { type: 'shields', value: 4 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Scurrg.png',
  pilots: [
    {
      name: 'Captain Nym',
      caption: 'Captain of the Lok Revenants',
      initiative: 5,
      limited: 1,
      cost: 6,
      xws: 'captainnym',
      ability:
        'Before a friendly bomb or mine would detonate, you may spend 1 [Charge] to prevent it from detonating. While you defend against an attack obstructed by a bomb or mine, roll 1 additional defense die.',
      charges: { value: 1, recovers: 1 },
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Gunner',
        'Device',
        'Device',
        'Modification',
        'Title',
      ],
      ffg: 204,
      standard: false,
      epic: true,
      loadout: 17,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_204.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_204.jpg',
    },
    {
      name: 'Lok Revenant',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'lokrevenant',
      text:
        'The Nubian Design Collective crafted the Scurrg H-6 Bomber with combat versatility in mind, arming it with powerful shields and a bristling array of destructive weaponry.',
      slots: ['Turret', 'Gunner', 'Device', 'Device'],
      ffg: 206,
      standard: false,
      epic: true,
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_206.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_206.jpg',
    },
    {
      name: 'Sol Sixxa',
      caption: 'Cunning Commander',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'solsixxa',
      ability:
        'If you would drop a device using a (1 [Straight]) template, you may drop it using any other speed 1 template instead.',
      slots: [
        'Talent',
        'Turret',
        'Crew',
        'Gunner',
        'Device',
        'Device',
        'Modification',
      ],
      ffg: 205,
      standard: false,
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_205.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_205.jpg',
    },
  ],
};

export default t;
