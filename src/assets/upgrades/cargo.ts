import { UpgradeBase } from '../../types';

const t: UpgradeBase[] = [
  {
    limited: 0,
    xws: 'adaptiveshields',
    sides: [
      {
        ability:
          'While another friendly ship at range 0-1 defends, if it is a smaller size than you, you may spend 1 shield or 2 [Energy] to cancel 1 [Hit] or [Critical Hit] result.',
        title: 'Adaptive Shields',
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 756,
      },
    ],
    cost: { value: 5 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'boostedscanners',
    sides: [
      {
        ability:
          'While you lock, coordinate, or jam, you may spend up to 3 [Energy] to increase the range at which you can choose an object by 1 per [Energy] spent this way, to a maximum of range 5.',
        title: 'Boosted Scanners',
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 757,
      },
    ],
    cost: { value: 7 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'optimizedpowercore',
    sides: [
      {
        ability: 'After you execute a blue maneuver, recover 1 [Energy].',
        title: 'Optimized Power Core',
        type: 'Cargo',
        slots: ['Cargo'],
        ffg: 758,
      },
    ],
    cost: { value: 6 },
    standard: false,
    epic: true,
  },
  {
    limited: 0,
    xws: 'tibannareserves',
    sides: [
      {
        ability: 'Action: Spend 1 [Charge] to recover 2 [Energy].',
        title: 'Tibanna Reserves',
        type: 'Cargo',
        slots: ['Cargo'],
        charges: { value: 3, recovers: 0 },
        ffg: 759,
      },
    ],
    cost: { value: 3 },
    standard: false,
    epic: true,
  },
];

export default t;
