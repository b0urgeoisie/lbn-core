import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Resistance Transport Pod',
  xws: 'resistancetransportpod',
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
    '3BR',
    '3FW',
    '3NR',
    '3KR',
    '4FR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'Red', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
    { difficulty: 'Red', type: 'Jam' },
  ],
  pilots: [
    {
      name: 'BB-8',
      xws: 'bb8',
      initiative: 3,
      limited: 1,
      standard: true,
      epic: true,
      ability:
        'During the System Phase, you may perform a red [Barrel Roll] or [Boost] action.',
      slots: ['Tech', 'Tech', 'Crew', 'Modification'],
      shipActions: [
        { difficulty: 'White', type: 'Calculate' },
        { difficulty: 'Red', type: 'Lock' },
        { difficulty: 'Red', type: 'Barrel Roll' },
        { difficulty: 'Red', type: 'Jam' },
      ],
      cost: 2,
      ffg: 573,
      caption: 'Full of Surprises',
      keywords: ['Droid'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/4d2201d40635299aa134acd52c9587af.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/bbe37aa13822e8c94d9b0950cdd9cdb0.jpg',
    },
    {
      name: 'Rose Tico',
      xws: 'rosetico',
      initiative: 3,
      limited: 1,
      caption: 'Earnest Engineer',
      standard: true,
      epic: true,
      ability:
        'While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.',
      slots: ['Talent', 'Tech', 'Crew', 'Modification', 'Modification'],
      cost: 3,
      ffg: 574,
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/1dbf7b355d60f5b3f278522eb702f99f.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/40cba6527802ef9afa41e4009265873c.jpg',
    },
    {
      name: 'Vi Moradi',
      xws: 'vimoradi',
      initiative: 1,
      limited: 1,
      caption: 'Starling',
      standard: false,
      epic: true,
      ability:
        'Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.',
      conditions: ['compromisingintel'],
      slots: ['Tech', 'Crew', 'Modification'],
      cost: 3,
      ffg: 576,
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/14139a2d20ff13b01bd5810371a89064.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/f13328acfd703dc5489fa2249b9f675e.jpg',
    },
    {
      name: 'Finn',
      xws: 'finn',
      initiative: 2,
      limited: 1,
      standard: true,
      epic: true,
      ability:
        'While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 focus result instead.',
      slots: ['Talent', 'Talent', 'Tech', 'Crew', 'Modification'],
      cost: 3,
      ffg: 575,
      caption: 'Big Deal',
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/311d88e51a039b79e9a422ab3c475288.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/6e5fea21ac8a7ee345fd07f1c42cc81d.jpg',
    },
  ],
  ffg: 65,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Resistance_Transport_Cockpit_Pod.png',
};

export default t;
