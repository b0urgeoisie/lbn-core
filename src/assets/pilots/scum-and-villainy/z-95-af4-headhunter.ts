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
  faction: 'Scum and Villainy',
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
      name: 'Binayre Pirate',
      initiative: 1,
      limited: 0,
      cost: 3,
      xws: 'binayrepirate',
      text:
        "Operating from the Double Worlds, Talus and Tralus, Kath Scarlet's gang of smugglers and pirates would never be described as reputable or dependable—even by other criminals.",
      slots: ['Illicit'],
      ffg: 173,
      standard: true,
      epic: true,
      loadout: 2,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_173.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_173.jpg',
    },
    {
      name: 'Black Sun Soldier',
      initiative: 3,
      limited: 0,
      cost: 3,
      xws: 'blacksunsoldier',
      text:
        "The vast and influential Black Sun crime syndicate can always find a use for talented pilots, provided they aren't particular about how they earn their credits.",
      slots: ['Modification', 'Illicit'],
      ffg: 172,
      standard: true,
      epic: true,
      loadout: 4,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_172.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_172.jpg',
    },
    {
      name: 'Kaa’to Leeachos',
      caption: 'Imposing Marauder',
      initiative: 3,
      limited: 1,
      cost: 3,
      xws: 'kaatoleeachos',
      ability:
        'At the start of the Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from that ship to yourself.',
      slots: ['Talent', 'Missile', 'Illicit', 'Modification'],
      ffg: 170,
      standard: true,
      epic: true,
      loadout: 11,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_170.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_170.jpg',
    },
    {
      name: 'N’dru Suhlak',
      caption: 'Hunt Saboteur',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'ndrusuhlak',
      ability:
        'While you perform a primary attack, if there are no other friendly ships at range 0-2, roll 1 additional attack die.',
      slots: ['Talent', 'Missile', 'Missile', 'Illicit'],
      ffg: 169,
      standard: true,
      epic: true,
      loadout: 7,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_169.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_169.jpg',
    },
    {
      name: 'Nashtah Pup',
      caption: 'Contingency Plan',
      initiative: 0,
      limited: 1,
      cost: 1,
      xws: 'nashtahpup',
      ability:
        "You can deploy only via emergency deployment, and you have the name, initiative, pilot ability, and ship [Charge] of the friendly, destroyed Hound's Tooth.",
      slots: [],
      ffg: 171,
      standard: true,
      epic: true,
      loadout: 0,
      extended: true,
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/Card_Pilot_171.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/Card_art_XW_P_171.jpg',
    },
    {
      name: 'Bossk',
      caption: 'Fearsome Hunter',
      initiative: 4,
      limited: 1,
      cost: 3,
      xws: 'bossk-z95af4headhunter',
      ability:
        'While you perform a primary attack, after the Neutralize Results step, you may spend 1 [Critical Hit] result to add 2 [Hit] results.',
      slots: ['Talent', 'Talent', 'Missile', 'Illicit', 'Modification'],
      standard: true,
      epic: true,
      ffg: 635,
      loadout: 10,
      extended: true,
      keywords: ['Bounty Hunter'],
      image:
        'https://squadbuilder.fantasyflightgames.com/card_images/en/13a94a5ed78d4629017a439fbf0906ea.png',
      artwork:
        'https://squadbuilder.fantasyflightgames.com/card_art/48cf03ca0e16baf2f506829f20517b83.jpg',
    },
  ],
};

export default t;
