import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Belbullab-22 Starfighter',
  xws: 'belbullab22starfighter',
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
    '3LR',
    '3TR',
    '3BW',
    '3FB',
    '3NW',
    '3YR',
    '3PR',
    '4FW',
    '5FW',
  ],
  faction: 'Separatist Alliance',
  stats: [
    { type: 'attack', value: 3, arc: 'Front Arc' },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
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
  pilots: [
    {
      name: 'General Grievous',
      caption: 'Ambitious Cyborg',
      initiative: 4,
      limited: 1,
      xws: 'generalgrievous',
      ability:
        "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
      standard: true,
      epic: true,
      cost: 5,
      slots: ['Talent', 'Missile', 'Title', 'Modification', 'Modification'],
      ffg: 492,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/9e4a215e799a9e7ad1853d19d149dd20.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3e4dee70764ead7ebe581246a0d4b85d.jpg',
    },
    {
      name: 'Wat Tambor',
      caption: 'Techno Union Foreman',
      initiative: 3,
      limited: 1,
      xws: 'wattambor',
      ability:
        'While you perform a primary attack, you may reroll 1 attack die for each calculating friendly ship at range 1 of the defender.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Tactical Relay', 'Modification', 'Modification'],
      ffg: 493,
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/68cbd6082683fe17778f829555f23a26.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/95127fa6d286fe64f3070e742dc64a7c.jpg',
    },
    {
      name: 'Feethan Ottraw Autopilot',
      limited: 0,
      initiative: 1,
      xws: 'feethanottrawautopilot',
      text:
        'Unlike the more disposable fighters it also built for the Separatists, Feethan Ottraw Scalable Assemblies designed the Belbullab-22 with a solid mix of firepower, durability, and speed.',
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
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Tactical Relay', 'Modification'],
      ffg: 496,
      keywords: ['Droid'],
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/538c4833605af80b226da9e5f800e6ef.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/91052cb8f4ba464f5ac4572a725f757b.jpg',
    },
    {
      name: 'Captain Sear',
      caption: 'Kage Infiltrator',
      limited: 1,
      initiative: 2,
      xws: 'captainsear',
      ability:
        'While a friendly ship at range 0-3 performs a primary attack, if the defender is in its [Bullseye Arc], before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 [Evade] result.',
      standard: true,
      epic: true,
      cost: 5,
      slots: ['Tactical Relay', 'Modification', 'Modification'],
      ffg: 494,
      loadout: 15,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/3d3704ab454433a8b4d73ee6bff430b8.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/91a7a38482d28f21b2620d058800a8fe.jpg',
    },
    {
      name: 'Skakoan Ace',
      xws: 'skakoanace',
      cost: 4,
      slots: ['Talent', 'Modification', 'Modification'],
      ffg: 495,
      initiative: 3,
      limited: 0,
      text:
        'With its powerful engines, devastating triple laser cannons, and high customizability, the Belbullab-22 is the chosen craft of several elite Separatist Alliance pilots, including the infamous General Grievous.',
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/ceb7a3bc406ff17be5dee5de62b39195.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/af0e63b7754ef598f1f36ed9a6c4b4ee.jpg',
    },
  ],
  ffg: 58,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_Belbullab-22.png',
};

export default t;
