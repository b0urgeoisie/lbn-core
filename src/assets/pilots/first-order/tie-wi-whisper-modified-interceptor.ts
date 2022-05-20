import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'TIE/wi Whisper Modified Interceptor',
  xws: 'tiewiwhispermodifiedinterceptor',
  size: 'Small',
  ffg: 88,
  dial: [
    '1TW',
    '1YW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '4KR',
    '5FB',
    '5KR',
  ],
  faction: 'First Order',
  stats: [
    { arc: 'Bullseye Arc', type: 'attack', value: 3 },
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 3 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Focus',
    },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Barrel Roll',
    },
    {
      difficulty: 'White',
      linked: { difficulty: 'White', type: 'Rotate Arc' },
      type: 'Boost',
    },
  ],
  ability: {
    name: 'Heavy Weapon Turret',
    text:
      'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. You <strong>must</strong> treat the [Front Arc] requirement of your equipped [Missile] upgrades as [Single Turret Arc]',
  },
  icon: '???',
  pilots: [
    {
      name: 'Kylo Ren',
      xws: 'kyloren-tiewiwhispermodifiedinterceptor',
      initiative: 5,
      limited: 1,
      standard: true,
      cost: 6,
      slots: [
        'Force Power',
        'Force Power',
        'Talent',
        'Missile',
        'Tech',
        'Tech',
        'Configuration',
        'Modification',
      ],
      ability:
        'Before an enemy ship in your [Bullseye Arc] is dealt a facedown damage card, you may spend 1 [Force]. If you do, that damage card is dealt faceup instead.',
      ffg: 919,
      caption: 'Supreme Leader of the First Order',
      keywords: ['Dark Side', 'Light Side', 'TIE'],
      force: { value: 3, recovers: 1, side: ['dark', 'light'] },
      epic: true,
      loadout: 18,
      extended: true,
    },
    {
      name: '“Wrath”',
      xws: 'wrath',
      initiative: 5,
      limited: 1,
      standard: true,
      cost: 5,
      slots: ['Talent', 'Talent', 'Tech', 'Tech', 'Configuration'],
      ability:
        'After you perform a [Bullseye Arc] attack, if you have 1 or more non-lock red or orange tokens, you may perform a bonus attack against a different target.',
      ffg: 920,
      caption: 'Herald of Destruction',
      keywords: ['TIE'],
      epic: true,
      loadout: 15,
      extended: true,
    },
    {
      name: '“Nightfall”',
      xws: 'nightfall',
      initiative: 4,
      limited: 1,
      text: '???',
      standard: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Tech', 'Tech', 'Tech', 'Configuration'],
      ffg: 921,
      keywords: ['TIE'],
      epic: true,
      caption: '709th Legion Veteran',
      ability:
        'After you fully execute a maneuver or perform a [Boost] action, each ship you moved through gains 2 jam tokens.',
      loadout: 10,
      extended: true,
    },
    {
      name: '“Whirlwind”',
      xws: 'whirlwind',
      initiative: 3,
      limited: 1,
      text: '???',
      standard: true,
      cost: 4,
      slots: ['Talent', 'Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 922,
      keywords: ['TIE'],
      epic: true,
      caption: 'Reap What You Sow',
      ability:
        'Before you engage, you may remove any number of jam tokens, then you may gain 1 focus token for each enemy ship that has you in its [Front Arc].',
      loadout: 12,
      extended: true,
    },
    {
      name: '709th Legion Ace',
      xws: '709thlegionace',
      initiative: 4,
      limited: 0,
      text:
        "Commanded by Supreme Leader Kylo Ren, the 709th Legion fights without mercy or remorse to crush the Resistance and bring the galaxy under the First Order's dominion.",
      standard: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 923,
      keywords: ['TIE'],
      epic: true,
      loadout: 10,
      extended: true,
    },
    {
      name: 'Red Fury Zealot',
      xws: 'redfuryzealot',
      initiative: 2,
      limited: 0,
      text:
        'Also called Red Fury, the 709th Legion is charged by Supreme Leader Kylo Ren with rooting out dissenters at Black Spire Outpost.',
      standard: true,
      cost: 4,
      slots: ['Talent', 'Missile', 'Tech', 'Tech', 'Configuration'],
      ffg: 924,
      keywords: ['TIE'],
      epic: true,
      loadout: 3,
      extended: true,
    },
  ],
};

export default t;
