import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'V-19 Torrent Starfighter',
  xws: 'v19torrentstarfighter',
  size: 'Small',
  dial: [
    '1TR',
    '1BB',
    '1FB',
    '1NB',
    '1YR',
    '2ER',
    '2TW',
    '2BW',
    '2FB',
    '2NW',
    '2YW',
    '2RR',
    '3BR',
    '3FB',
    '3NR',
    '3KR',
    '4FW',
  ],
  faction: 'Galactic Republic',
  stats: [
    { type: 'attack', arc: 'Front Arc', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
  ],
  actions: [
    { type: 'Focus', difficulty: 'White' },
    { type: 'Evade', difficulty: 'White' },
    { type: 'Lock', difficulty: 'White' },
    {
      type: 'Barrel Roll',
      difficulty: 'White',
      linked: { type: 'Evade', difficulty: 'Red' },
    },
  ],
  pilots: [
    {
      name: '“Kickback”',
      caption: 'Blue Four',
      xws: 'kickback',
      initiative: 4,
      limited: 1,
      ability:
        'After you perform a [Barrel Roll] action, you may perform a red [Lock] action.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 517,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/76c1228dd4c70dc4e56ac99284a11b0f.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/50b08d380769e7127b0d3f5dbbd89d1f.jpg',
    },
    {
      name: '“Odd Ball”',
      caption: 'CC-2237',
      xws: 'oddball',
      initiative: 5,
      limited: 1,
      ability:
        'After you fully execute a red maneuver or perform a red action, if there is an enemy ship in your [Bullseye Arc], you may acquire a lock on that ship.',
      standard: true,
      epic: true,
      cost: 4,
      loadout: 16,
      slots: ['Talent', 'Torpedo', 'Missile', 'Modification'],
      ffg: 516,
      keywords: ['Clone'],
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/9ecf7600f20da9a9eff5d3e244934ccb.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/2a20c8f88cf55b75df4909f74b0221a2.jpg',
    },
    {
      name: '“Swoop”',
      caption: 'Blue Six',
      xws: 'swoop',
      initiative: 3,
      limited: 1,
      ability:
        'After a friendly small or medium ship fully executes a speed 3-4 maneuver, if it is at range 0-1, it may perform a red [Boost] action.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Missile', 'Modification'],
      ffg: 519,
      keywords: ['Clone'],
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/8ae255235c0c1d3892344fb43fcab773.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/c8c96604a64fce6b953a8b4dc4ff86e6.jpg',
    },
    {
      name: '“Axe”',
      caption: 'Blue Two',
      xws: 'axe',
      initiative: 3,
      limited: 1,
      ability:
        'After you defend or perform an attack, you may choose a friendly ship at range 1-2 in your [Left Arc] or [Right Arc]. If you do, transfer 1 green token to that ship.',
      standard: true,
      epic: true,
      cost: 3,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 518,
      keywords: ['Clone'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/89ade203dec6b0fa5ed6360aae3b3022.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/3129e7fc822115a91a04004c35ceda18.jpg',
    },
    {
      name: '“Tucker”',
      caption: 'Blue Five',
      xws: 'tucker',
      initiative: 2,
      limited: 1,
      ability:
        'After a friendly ship at range 1-2 performs an attack against an enemy ship in your [Front Arc], you may perform a [Focus] action.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Missile', 'Modification'],
      ffg: 520,
      keywords: ['Clone'],
      loadout: 13,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/a457cc2ab3038736cb37541ad94b9b34.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/0b24c3261656d83b685ac59e6dfb1817.jpg',
    },
    {
      name: 'Blue Squadron Protector',
      xws: 'bluesquadronprotector',
      initiative: 3,
      limited: 0,
      text:
        "Blue Squadron's elite clone pilots are trained to fly their V-19s in conjunction with Jedi and often support famous commanders such as Anakin Skywalker and Ahsoka Tano.",
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Modification'],
      ffg: 521,
      keywords: ['Clone'],
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/77b2dfdca20865d8d667c41539a7356e.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/74667d2878cb823d14035e91c8773816.jpg',
    },
    {
      name: 'Gold Squadron Trooper',
      xws: 'goldsquadrontrooper',
      initiative: 2,
      limited: 0,
      text:
        'The V-19 Torrent starfighter was designed to be a light escort to nimble Delta-7 interceptors flown by Jedi Knights, and has a unique flight profile to reflect this role.',
      standard: true,
      epic: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Modification'],
      ffg: 522,
      keywords: ['Clone'],
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/ed881318b45485a197e514b2d13e178c.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/e4ba0b540259e9026142e6fa5e837685.jpg',
    },
  ],
  ffg: 62,
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_V-19Torrent.png',
};

export default t;
