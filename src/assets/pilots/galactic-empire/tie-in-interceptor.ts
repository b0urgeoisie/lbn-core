import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/in Interceptor',
  xws: 'tieininterceptor',
  ffg: 41,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BW',
    '3FB',
    '3NW',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FW',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  ability: {
    name: 'Autothrusters',
    text:
      'After you perform an action, you may perform a red [Barrel Roll] or red [Boost] action.',
  },
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_TIEInterceptor.png',
  pilots: [
    {
      name: 'Alpha Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 4,
      xws: 'alphasquadronpilot',
      text:
        'Sienar Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, a dramatic increase in firepower over its predecessors.',
      slots: ['Talent', 'Modification', 'Configuration'],
      ffg: 106,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 2,
      extended: true,
    },
    {
      name: 'Saber Squadron Ace',
      initiative: 4,
      limited: 0,
      cost: 4,
      xws: 'sabersquadronace',
      text:
        "Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire's best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.",
      slots: ['Talent', 'Missile', 'Modification', 'Configuration'],
      ffg: 105,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 3,
      extended: true,
    },
    {
      name: 'Soontir Fel',
      caption: 'Ace of Legend',
      initiative: 6,
      limited: 1,
      cost: 6,
      xws: 'soontirfel',
      ability:
        'At the start of the Engagement Phase, if there is an enemy ship in your [Bullseye Arc], gain 1 focus token.',
      slots: [
        'Talent',
        'Talent',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ffg: 103,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 15,
      extended: true,
    },
    {
      name: 'Turr Phennir',
      caption: 'Ambitious Ace',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'turrphennir',
      ability:
        'After you perform an attack, you may perform a [Barrel Roll] or [Boost] action, even if you are stressed.',
      slots: [
        'Talent',
        'Talent',
        'Modification',
        'Modification',
        'Configuration',
      ],
      ffg: 104,
      standard: true,
      epic: true,
      keywords: ['TIE'],
      loadout: 9,
      extended: true,
    },
    {
      xws: 'cienaree',
      name: 'Ciena Ree',
      caption: 'Look Through My Eyes',
      cost: 5,
      initiative: 6,
      limited: 1,
      ability:
        'After you perform an attack, if the defender was destroyed, gain 1 stress token. After a friendly ship at range 0-3 is destroyed, remove 1 stress token.',
      slots: ['Talent', 'Talent', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 889,
      loadout: 10,
      extended: true,
    },
    {
      xws: 'gideonhask-tieininterceptor',
      name: 'Gideon Hask',
      caption: 'Inferno Two',
      cost: 5,
      initiative: 4,
      limited: 1,
      ability:
        'While you perform an attack against a damaged defender, roll 1 additional attack die.',
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 892,
      loadout: 12,
      extended: true,
    },
    {
      xws: 'vultskerris-tieininterceptor',
      name: 'Vult Skerris',
      caption: 'Arrogant Ace',
      cost: 4,
      loadout: 6,
      initiative: 5,
      limited: 1,
      ability:
        'Action: Gain 1 strain token to recover 1 [Charge]. Before you engage, you may spend 1 [Charge] to perform an action.',
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 890,
      extended: true,
    },
    {
      xws: 'commandantgoran',
      name: 'Commandant Goran',
      caption: 'Skystrike Superintendent',
      cost: 4,
      initiative: 4,
      limited: 1,
      ability:
        'At the start of the Engagement Phase, choose a ship at range 0-3 with a lower initiative than yours. The chosen ship gains 1 evade token and removes 1 non-stress red token',
      slots: ['Talent', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 891,
      loadout: 8,
      extended: true,
    },
    {
      xws: 'lieutenantlorrir',
      name: 'Lieutenant Lorrir',
      caption: 'Requiem for Brentaal',
      cost: 4,
      initiative: 3,
      limited: 1,
      ability:
        'While you barrel roll, you must use the ([Bank Left] or [Bank Right]) template instead of the ([Straight]) template.',
      slots: [
        'Talent',
        'Modification',
        'Modification',
        'Modification',
        'Configuration',
      ],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 893,
      loadout: 6,
      extended: true,
    },
    {
      xws: 'nashwindrider',
      name: 'Nash Windrider',
      caption: 'Alderaanian Zealot',
      cost: 4,
      initiative: 2,
      limited: 1,
      ability:
        'During the Engagement Phase, after a friendly small ship at range 0-3 is destroyed, if that ship has not engaged this phase, you may spend 1 [Charge]. If you do, that ship engages at the current initiative.',
      charges: { value: 1, recovers: 1 },
      slots: ['Missile', 'Modification', 'Modification', 'Configuration'],
      standard: true,
      epic: true,
      keywords: ['TIE'],
      ffg: 894,
      loadout: 6,
      extended: true,
    },
  ],
};

export default t;
