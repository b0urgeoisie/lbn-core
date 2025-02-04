import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Alpha-class Star Wing',
  xws: 'alphaclassstarwing',
  ffg: 14,
  size: 'Small',
  dial: [
    '1BW',
    '1FB',
    '1NW',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '3TW',
    '3BW',
    '3FW',
    '3NW',
    '3YW',
    '4FR',
  ],
  faction: 'Galactic Empire',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 4 },
    { type: 'shields', value: 3 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'SLAM' },
    { difficulty: 'White', type: 'Reload' },
  ],
  icon:
    'https://squadbuilder.fantasyflightgames.com/ship_types/I_AlphaStarwing.png',
  pilots: [
    {
      name: 'Lieutenant Karsabi',
      caption: 'Brash Noble',
      initiative: 3,
      limited: 1,
      cost: 5,
      xws: 'lieutenantkarsabi',
      ability:
        'After you gain a disarm token, if you are not stressed, you may gain 1 stress token to remove 1 disarm token.',
      slots: ['Talent', 'Sensor', 'Missile', 'Modification', 'Configuration'],
      ffg: 136,
      standard: false,
      epic: true,
      loadout: 11,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_136.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_136.jpg',
    },
    {
      name: 'Major Vynder',
      caption: 'Pragmatic Survivor',
      initiative: 4,
      limited: 1,
      cost: 6,
      xws: 'majorvynder',
      ability:
        'While you defend, if you are disarmed, roll 1 additional defense die.',
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification', 'Configuration'],
      ffg: 135,
      standard: false,
      epic: true,
      loadout: 21,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_135.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_135.jpg',
    },
    {
      name: 'Nu Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 5,
      xws: 'nusquadronpilot',
      text:
        'With a design inspired by other Cygnus Spaceworks vessels, the Alpha-class star wing is a versatile craft assigned to Imperial Navy specialist units that need a starfighter they can outfit for multiple roles.',
      slots: ['Sensor', 'Cannon', 'Modification', 'Configuration'],
      ffg: 138,
      standard: false,
      epic: true,
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_138.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_138.jpg',
    },
    {
      name: 'Rho Squadron Pilot',
      initiative: 3,
      limited: 0,
      cost: 5,
      xws: 'rhosquadronpilot',
      text:
        'The elite pilots of Rho Squadron instill terror in the Rebellion, using both the Xg-1 assault configuration and Os-1 arsenal loadout of the Alpha-class star wing to devastating effect.',
      slots: ['Talent', 'Sensor', 'Modification', 'Configuration'],
      ffg: 137,
      standard: false,
      epic: true,
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_137.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_137.jpg',
    },
  ],
};

export default t;
