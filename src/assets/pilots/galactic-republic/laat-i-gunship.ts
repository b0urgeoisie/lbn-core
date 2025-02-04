import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Laat/i Gunship',
  xws: 'laatigunship',
  size: 'Medium',
  dial: [
    '0OR',
    '1BW',
    '1FB',
    '1NW',
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
  ],
  faction: 'Galactic Republic',
  stats: [
    { arc: 'Double Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 1 },
    { type: 'hull', value: 8 },
    { type: 'shields', value: 2 },
    { type: 'charges', value: 2, recovers: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Reinforce' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Rotate Arc' },
    { difficulty: 'White', type: 'Reload' },
  ],
  ability: {
    name: 'Fire Convergence',
    text:
      'While a friendly ship performs a non-[Single Turret Arc] attack, if the defender is in your [Single Turret Arc], you may spend 1 [Charge].  If you do, the attacker rerolls up to 2 attack dice.',
  },
  pilots: [
    {
      xws: 'hawk',
      ffg: 660,
      name: '“Hawk”',
      cost: 5,
      limited: 1,
      initiative: 4,
      caption: 'Valkyrie 2929',
      slots: [
        'Talent',
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'At the start of the End Phase, each friendly ship at range 0-1 that has a revealed maneuver of speed 3-5 may gain 1 strain token to perform a [Barrel Roll] or [Boost] action.',
      keywords: ['Clone'],
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/e1fe9b6985d7c9960d634734abd9f9eb.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/14be5b23859dff4b6213511eb97e4e5b.jpg',
    },
    {
      xws: 'hound',
      ffg: 662,
      name: '“Hound”',
      cost: 6,
      limited: 1,
      initiative: 2,
      caption: 'Vigilant Tracker',
      slots: [
        'Sensor',
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'After a friendly small ship in your [Single Turret Arc] gains a deplete or strain token, if you have no tokens of that type, you may transfer that token to yourself.',
      keywords: ['Clone'],
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/2230c99fa815740b48c9350547e1c299.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/a88730785b8495c24b1711278ed18934.jpg',
    },
    {
      xws: 'warthog',
      ffg: 661,
      name: '“Warthog”',
      cost: 6,
      limited: 1,
      initiative: 3,
      caption: 'Veteran of Kadavo',
      slots: [
        'Talent',
        'Torpedo',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      standard: true,
      epic: true,
      ability:
        'After you or a friendly non-limited ship at range 0-2 are destroyed during the Engagement Phase, that ship is not removed until the end of that phase.',
      keywords: ['Clone'],
      loadout: 18,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/1a2d9bd52455f4da3de74de0d9a78380.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f1866068850a0c806bfbe03c8bba2d07.jpg',
    },
    {
      name: '212th Battalion Pilot',
      initiative: 2,
      limited: 0,
      xws: '212thbattalionpilot',
      text:
        'Capable of functioning in space assaults and atmospheric battles alike, the LAAT/i gunship transports Republic troops to battlefronts on planets besieged by the Separatists.',
      standard: true,
      epic: true,
      slots: [
        'Missile',
        'Missile',
        'Crew',
        'Crew',
        'Gunner',
        'Gunner',
        'Modification',
      ],
      cost: 5,
      ffg: 663,
      keywords: ['Clone'],
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/0967a5458478435b72971f7d972a8aaf.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/b8538000c5745f53f79e9b6650e6deec.jpg',
    },
  ],
  ffg: 74,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_LAAT_Republic_Gunship.png',
};

export default t;
