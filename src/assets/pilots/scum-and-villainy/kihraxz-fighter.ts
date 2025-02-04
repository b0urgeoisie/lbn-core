import { ShipType } from '../../../types';

const t: ShipType = {
  name: 'Kihraxz Fighter',
  xws: 'kihraxzfighter',
  ffg: 7,
  size: 'Small',
  dial: [
    '1TW',
    '1BB',
    '1NB',
    '1YW',
    '2ER',
    '2TW',
    '2BB',
    '2FB',
    '2NB',
    '2YW',
    '2RR',
    '3BW',
    '3FB',
    '3NW',
    '4FW',
    '4KR',
  ],
  faction: 'Scum and Villainy',
  stats: [
    { arc: 'Front Arc', type: 'attack', value: 3 },
    { type: 'agility', value: 2 },
    { type: 'hull', value: 5 },
    { type: 'shields', value: 1 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
  ],
  icon: 'https://squadbuilder.fantasyflightgames.com/ship_types/I_Kihraxz.png',
  pilots: [
    {
      name: 'Black Sun Ace',
      initiative: 3,
      limited: 0,
      cost: 4,
      xws: 'blacksunace',
      text:
        'The Kihraxz assault fighter was developed specifically for the Black Sun crime syndicate, whose highly paid ace pilots demanded a nimble, powerful ship to match their skills.',
      slots: ['Talent'],
      ffg: 195,
      standard: false,
      epic: true,
      loadout: 3,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_195.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_195.jpg',
    },
    {
      name: 'Captain Jostero',
      caption: 'Aggressive Opportunist',
      initiative: 3,
      limited: 1,
      cost: 4,
      xws: 'captainjostero',
      ability:
        'After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against that ship.',
      slots: ['Missile', 'Illicit', 'Illicit', 'Modification', 'Modification'],
      ffg: 194,
      standard: false,
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_194.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_194.jpg',
    },
    {
      name: 'Cartel Marauder',
      initiative: 2,
      limited: 0,
      cost: 4,
      xws: 'cartelmarauder',
      text:
        "The versatile Kihraxz was modeled after Incom's popular X-wing starfighter, but an array of after-market modification kits ensure a wide variety of designs.",
      slots: ['Illicit'],
      ffg: 196,
      standard: false,
      epic: true,
      loadout: 5,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_196.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_196.jpg',
    },
    {
      name: 'Graz',
      caption: 'The Hunter',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'graz',
      ability:
        'While you defend, if you are behind the attacker, roll 1 additional defense die. While you perform an attack, if you are behind the defender, roll 1 additional attack die.',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      ffg: 192,
      standard: false,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 8,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_192.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_192.jpg',
    },
    {
      name: 'Talonbane Cobra',
      caption: 'Scourge of Tansarii Point',
      initiative: 5,
      limited: 1,
      cost: 5,
      xws: 'talonbanecobra',
      ability:
        'While you defend at attack range 3 or perform an attack at attack range 1, roll 1 additional die.',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      ffg: 191,
      standard: false,
      epic: true,
      loadout: 12,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_191.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_191.jpg',
    },
    {
      name: 'Viktor Hel',
      caption: 'Storied Bounty Hunter',
      initiative: 4,
      limited: 1,
      cost: 4,
      xws: 'viktorhel',
      ability:
        'After you defend, if you did not roll exactly 2 defense dice, the attacker gains 1 stress token.',
      slots: [
        'Talent',
        'Missile',
        'Illicit',
        'Illicit',
        'Modification',
        'Modification',
      ],
      ffg: 193,
      standard: false,
      epic: true,
      keywords: ['Bounty Hunter'],
      loadout: 10,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_193.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_193.jpg',
    },
  ],
};

export default t;
