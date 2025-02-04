import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Z-95-AF4 Headhunter',
  xws: 'z95af4headhunter',
  ffg: 38,
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
    '3FB',
    '3NW',
    '3YW',
    '3KR',
    '4FW',
    '4KR',
  ],
  faction: 'Rebel Alliance',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'Red', type: 'Barrel Roll' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Z-95.png',
  pilots: [
    {
      name: 'Airen Cracken',
      caption: 'Intelligence Chief',
      initiative: 5,
      limited: 1,
      cost: 3,
      xws: 'airencracken',
      ability:
        'After you perform an attack, you may choose 1 friendly ship at range 1. That ship may perform an action, treating it as red.',
      slots: ['Talent', 'Sensor', 'Torpedo', 'Modification'],
      ffg: 27,
      standard: true,
      epic: true,
      loadout: 9,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_27.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_27.jpg',
    },
    {
      name: 'Bandit Squadron Pilot',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'banditsquadronpilot',
      text:
        "The Z-95 Headhunter was the primary inspiration for Incom Corporation's exemplary T-65 X-wing starfighter. Though it is considered outdated by modern standards, it remains a versatile and potent snub fighter.",
      slots: ['Missile', 'Modification'],
      ffg: 30,
      standard: true,
      epic: true,
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_30.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_30.jpg',
    },
    {
      name: 'Lieutenant Blount',
      caption: 'Team Player',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'lieutenantblount',
      ability:
        'While you perform a primary attack, if there is at least 1 other friendly ship at range 0-1 of the defender, you may roll 1 additional attack die.',
      slots: ['Talent', 'Talent', 'Modification'],
      ffg: 28,
      standard: true,
      epic: true,
      loadout: 6,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_28.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_28.jpg',
    },
    {
      name: 'Tala Squadron Pilot',
      initiative: 2,
      limited: 0,
      cost: 3,
      xws: 'talasquadronpilot',
      text:
        'The AF4 series is the latest in a long line of Headhunter designs. Cheap and relatively durable, it is a favorite among independent outfits like the Rebellion.',
      slots: ['Talent', 'Modification'],
      ffg: 29,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_29.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_29.jpg',
    },
  ],
};

export default t;
