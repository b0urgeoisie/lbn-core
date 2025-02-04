import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'GR-75 Medium Transport',
  xws: 'gr75mediumtransport',
  size: 'Huge',
  dial: [
    '0BR',
    '0OR',
    '0NR',
    '1BB',
    '1NB',
    '1FB',
    '2BW',
    '2NW',
    '2FW',
    '3FR',
    '4FR',
  ],
  faction: 'Rebel Alliance',
  stats: [],
  actions: [],
  ability: {
    name: 'Resupply Craft',
    text:
      'After another friendly ship at range 0-1 performs an action, you may spend 1 [Energy]. If you do, it removes 1 orange or red token, or recovers 1 shield.',
  },
  pilots: [
    {
      name: 'Echo Base Evacuees',
      text:
        "The GR-75 medium transport acquitted itself well at battles such as the evacuation of Hoth, where several of these ships were pivotal to the Rebel forces' escape.",
      initiative: 7,
      engagement: 1,
      limited: 0,
      cost: 65,
      xws: 'echobaseevacuees',
      slots: [
        'Command',
        'Hardpoint',
        'Turret',
        'Crew',
        'Crew',
        'Team',
        'Cargo',
        'Cargo',
        'Title',
      ],
      standard: false,
      extended: false,
      epic: true,
      ffg: 709,
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/4a49f20575c252f47a70d3c4da909301.jpg',
    },
  ],
  ffg: 80,
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_GR-75.png',
};

export default t;
