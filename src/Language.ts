import importedLanguages from "../data/languages.json";

function never(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

const concepts = [
  'earth', 'sky',

  'mountain', 'hill', 'valley', 'peak', 'mound', 'point', 'mountain-chain',
  'crest', 'fall', 'ridge', 'pass',

  'island', 'isle',

  'sea', 'lake', 'bay', 'pool', 'harbor', 'shore', 'port', 'beach', 'wave',

  'forest', 'grove', 'glade',
  'cave',
  'marsh', 'swamp', 'fen', 'gyre',
  'desert',
  'jungle', 'volcano', 'plains',

  'edge',
  'vale', 'field', 'mead',
  'river', 'glen', 'stream', 'mere', 'mouth', 'cross', 'bridge', 'dale', 'ford', 'brook',
  // barrow, downs, gulch ...

  'town', 'borough', 'village', 'stead', 'hold', 'view', 'keep', 'watch', 'rest', 'run', 'fast',

  'land', 'place', 'realm', 'region',
  'peoples', 'kingdom',
  'road', 'path',
  'haven', 'fortress', 'prison', 'citadel', 'stronghold', 'tower', 'garden',
  // modifiers..
  'ever-', '-less', 'at-',
  // masculine/feminine suffices
  '-person', '-man', '-son', '-woman', '-maid', '-daughter',
  // relations
  'friend', 'foe', 'lord', 'slave', 'king', 'queen', 'prince', 'princess',

  // ...aspects...
  'light', 'dark',
  'shadow', 'shade',
  'sun', 'moon', 'stars',
  'day', 'night', 'spark', 'starlight', 'firmament',
  // weather
  'heat', 'cold', 'wet', 'dry',
  'mist', 'snow', 'wind', 'rain', 'cloud', //'hail',
  'rainbow', 'dew', 'frost',
  // metals...
  'tin', 'iron', 'silver', 'gold', 'copper',
  // materials
  'stone', 'wood', 'pearl', 'shell', 'glass',
  // types of stone
  'flint', 'marble', 'basalt',
  // 'bone',
  // weapons
  // 'axe', 'sword', 'bow', 'shield',

  // cut, delve, hew, till, hunt...?

  // shades, hues...
  'white', 'black', 'gray', 'red', 'blue', 'green', 'orange',
  // ...animals,
  'dragons', 'elephants',
  'bears', 'birds', 'horses', 'snakes', 'wolves',
  'moles',
  // mole...

  // tame animals..
  // 'boars',
  'hounds',

  // birds in particular...
  'swans', 'eagles', 'nightingales', 'swallows',
  // swallow

  // ...elements,
  'ice', 'fire', 'earth', 'water',

  // quasi-elements...
  'embers', 'steam', 'magma', 'radiance',
  'soot', 'ash', 'salt', 'void', 'smoke',

  // 

  // ...times of day
  'morning', 'evening', 'dusk', 'noon', 'afternoon', 'midnight',
  // trees
  'willow', 'pine', 'cherry', 'oak', 'spruce', 'birch', 'elm', 'holly', 'fern',
  'palm', 'acorn',
  // flowers
  'rose', 'daisy', 'poppy', 'dandelion', 'lily',
  // foliage
  'tree', 'bark', 'leaf', 'root', 'bush', 'thorn', 'flower', 'moss',
  'vine', 'grass',
  // jasmine/jessamine, violet
  // lotus

  // seasons
  'autumn', 'winter', 'spring', 'summer',
  // moods
  'dread', 'horror', 'awe', 'joy', 'sorrow', 'gloom',
  // food
  'apple', 'honey', 'bread', 'elderberry', 'wine', 'fish',


  // natural substances..
  'wax',

  // 'nut',

  // instruments..?
  'harp',
  // lute, harp, viol ...

  // adjectives...
  'tall', 'deep', 'lofty', 'lonely', 'high',
  'great', 'large', 'small', 'tiny',
  'narrow', 'wide', 'sharp', 'giant',
  'quick', 'pale', 'bitter', 'wild',
  'golden', 'holy', 'fortunate', 'dusty', 'beautiful',
  'fell', 'cloudy', 'secret', 'sweet', 'bold',
  'splendid', 'abundant', 'sparkling',

  // animal aspects...
  'horns', 'fangs', 'claws', 'wings',

  // body parts...
  'hand', 'foot', 'head', 'eye', 'ear', 'heart',

  // gemstones...
  // 'emerald', 'ruby',

  // more abstract things...
  'love', 'dream',
  'song', 'music', 'silence',

  'divine',

  'fate', 'thought', 'speech', 'skill',
  'tomorrow',

  'spirit',
  'tyranny', 'freedom',

  'magic',

  // bodily substances
  'blood', 'tears',

  // activities?
  'laughter',

  // created things...
  'jewel', 'ship', 'needle', 'bell', 'candle',

  // clothes
  'mantle', 'veil', // 'garment'

  // architectural features
  'arch', 'spire', 'gate', 'pillar', 'fountain',


  // questing...
  'journey', 'treasure', 'battle', 'smith',

  // names for the languages themselves? races?
  // 'dwarves', // dwarrow, khazad,
  // 'dwarvish', // dwarvish, khuzdul...
  // 'elves', // aelves,
  // 'elvish', // aelvish, sindarin,
  // 'men', // men
  // 'mannish', // westron, ...

  // 'peoples',
  // 'common',
  // men (ylde/glishmen/...), dwarrow (dwarven/khuzdul...), aeldar (aelves/quenya...), maiar, valar,

  'star',

  'rock', 'sand',
  'hollow', 'damp',
  'ember',

  'any',

  'spray',

  'metal'


] as const;

// type ConceptKind = "color" | "animal" | "element" | "nature" | "place" | "object" | "abstract" | "modifier" | "adjective" | "timeOfDay" | "bodyPart" | "animalPart" | "tree" | "season" | "mood" | "food" | "architecture" | "instrument";

const terrainKinds = [
  "forest", "lake", "cave", "swamp", "mountain", "river", "island", "plains"
] as const;
export type TerrainKind = typeof terrainKinds[number];

export const conceptKinds = [
  "color", "animal", "element", "nature", "place", "object", "abstract", "modifier", "adjective", "timeOfDay", "bodyPart", "animalPart", "tree", "season", "mood", "food", "architecture", "instrument",
  "town", "flower", "metal", "rock", "material",
  ...terrainKinds
] as const;

export type ConceptKind = typeof conceptKinds[number];

export type ConceptTemplate = 'personalName' | 'nobleHouse' | 'townName' | 'mountainName';

export class Conceptory {
  static conceptKinds: { [key in ConceptKind]: Concept[] } = {
    color: [
      'white', 'black', 'gray', 'red', 'blue', 'green', 'orange',
      // "_color": "=oneOf(crimson, sable, golden, argent, azure, emerald, violet, ivory, onyx, amber, cerulean)",
    ],
    animal: ['dragons', 'elephants', 'bears', 'birds', 'horses', 'snakes', 'wolves', 'hounds', 'swans', 'eagles', 'nightingales', 'swallows', 'moles'],
    element: ['ice', 'fire', 'earth', 'water', 'embers', 'steam', 'magma', 'radiance', 'soot', 'ash', 'salt', 'void', 'smoke'],
    metal: ['iron', 'gold', 'silver', 'copper', 'tin'],
    rock: ['flint', 'marble', 'basalt'],
    material: ['stone', 'wood', 'pearl', 'shell', 'glass','metal'],
    nature: ['forest', 'grove', 'glade', 'cave', 'marsh', 'swamp', 'fen', 'gyre', 'desert', 'river', 'glen', 'stream', 'mere', 'mountain', 'hill', 'valley', 'peak', 'mound', 'point', 'mountain-chain', 'crest', 'fall', 'ridge', 'pass', 'island', 'isle', 'sea', 'lake', 'bay', 'pool', 'harbor', 'shore', 'port', 'beach', 'wave', 'tree', 'bark', 'leaf', 'root', 'bush', 'thorn', 'flower', 'moss', 'vine', 'grass'],
    place: ['town', 'borough', 'village', 'stead', 'hold', 'view', 'keep', 'watch', 'rest', 'run', 'land', 'place', 'realm', 'region', 'road', 'path', 'haven', 'fortress', 'prison', 'citadel', 'stronghold', 'garden'],
    object: ['jewel', 'ship', 'needle', 'bell', 'candle', 'mantle', 'veil', 'fountain'],
    abstract: ['love', 'dream', 'song', 'music', 'silence', 'divine', 'fate', 'thought', 'speech', 'skill', 'tomorrow', 'spirit', 'tyranny', 'freedom', 'magic'],
    modifier: ['ever-', '-less', 'at-', '-person', '-man', '-son', '-woman', '-maid', '-daughter'],
    adjective: ['tall', 'deep', 'lofty', 'lonely', 'high', 'great', 'large', 'small', 'tiny', 'narrow', 'wide', 'sharp', 'giant', 'quick', 'pale', 'bitter', 'golden', 'holy', 'fortunate', 'dusty', 'beautiful', 'fell', 'cloudy', 'secret', 'sweet', 'bold', 'splendid', 'abundant', 'sparkling'],
    timeOfDay: ['morning', 'evening', 'dusk', 'noon', 'afternoon', 'midnight'],
    bodyPart: ['hand', 'foot', 'head', 'eye', 'ear', 'heart'],
    animalPart: ['horns', 'fangs', 'claws', 'wings'],
    tree: ['willow', 'pine', 'cherry', 'oak', 'spruce', 'birch', 'elm', 'holly', 'fern', 'palm', 'acorn'],
    season: ['autumn', 'winter', 'spring', 'summer'],
    mood: ['dread', 'horror', 'awe', 'joy', 'sorrow', 'gloom'],
    food: ['apple', 'honey', 'bread', 'elderberry', 'wine', 'fish'],
    architecture: ['arch', 'spire', 'gate', 'pillar', 'fountain', 'tower'],
    instrument: ['harp'],

    flower: ['rose', 'lily', 'daisy', 'poppy', 'dandelion'],

    town: [ "borough", "town", "village", "stead", "hold", "view", "land", "keep", "watch", "rest", "run", "fast", "field" ],

    forest: [
      "tree", "flower", "wood", "grove", "glade", "glen", "moss", "vine"
    ],
    lake: [ "lake", "mere", "pool" ],
    cave: [ "cave", "mouth", "hollow", "deep" ],
    swamp: [ "marsh", "fen", "swamp" ],
    mountain: [ "peak", "ridge", "point", "crest", "fall", "ridge", "pass", "hill" ],
    river: [ "river", "stream", "brook" ],
    island: [ "isle", "island", "bay", "port", "shore", "haven", "beach" ],
    plains: [ "mead", "field", "vale", "grass" ]
  }

  static getConceptsByKind(kind: ConceptKind): Concept[] {
    return this.conceptKinds[kind];

  }

  static assemble(...kinds: ConceptKind[]): Concept[] {
    let results: Concept[] = [];
    for (const kind of kinds) {
      const choices = this.getConceptsByKind(kind);
      // const pick = choices[Math.floor(Math.random() * choices.length)];
      // if (!pick) {
      //   throw new Error(`Failed to pick a concept from kind "${kind}"`);
      // }
      if (!choices) {
        throw new Error(`No concepts available for kind "${kind}"`);
      }
      let result = pick(choices);
      // if result is in turn a concept kind give a 0.5 chance to resolve it again
      while (this.conceptKinds[result as ConceptKind]) {
        if (Math.random() > 0.5) break;
        result = pick(this.getConceptsByKind(result as ConceptKind));
      }
      results = results.concat(result);
    }
    return results;
  }

  static personalNameTemplates: { [key: string]: ConceptKind[] } = {
    'adjectivePart': ['adjective', 'bodyPart'],
    'colorPart': ['color', 'bodyPart'],
    'elementAbstract': ['element', 'abstract'],
    'adjectiveAbstract': ['adjective', 'abstract'],
    'adjectiveElement': ['adjective', 'element'],
    'adjectiveFlower': ['adjective', 'flower'],
    'adjectiveTree': ['adjective', 'tree']
  }

  static townTemplates: { [key: string]: ConceptKind[] } = {
    "forest": ['forest', 'town'],
    "lake": ['lake', 'town'],
    "cave": ['cave', 'town'],
    "swamp": ['swamp', 'town'],
    "mountain": ['mountain', 'town'],
    "river": ['river', 'town'],
    "island": ['island', 'town'],
    "plains": ['plains', 'town'],
  }

  static mountainTemplates: { [key: string]: ConceptKind[] } = {
    "metalMountain": ['metal', 'mountain'],
    "stoneMountain": ['rock', 'mountain']
  }

  // static nobleHouseTemplates: { [key: string]: ConceptKind[] }= {
  //   'simpleObject': ['color', 'object'],
  //   // 'natural': ['color', 'nature'],
  //   'animal': ['color', 'animal'],
  //   'elemental': ['color', 'element'],
  //   'tree': ['color', 'tree'],
  //   'architecture': ['color', 'architecture'],
  //   'instrument': ['color', 'instrument'],
  // }

  private static generateFromTemplate(templateKey: string, templateSet: { [key: string]: ConceptKind[] }): Concept[] {
    const template = templateSet[templateKey];
    if (!template) {
      throw new Error(`Template "${templateKey}" not found.`);
    }
    return this.assemble(...template);
  }

  static generate(
    conceptTemplate: ConceptTemplate
  ): Concept[] {
    let templateSet: { [key: string]: ConceptKind[] } = {};
    if (conceptTemplate === 'personalName') {
      templateSet = this.personalNameTemplates;
    } else if (conceptTemplate === 'townName') {
      templateSet = this.townTemplates;
    } else if (conceptTemplate === 'mountainName') {
      templateSet = this.mountainTemplates;
    } else {
      return never(conceptTemplate as never);
    }
    const templateKeys = Object.keys(templateSet);
    const randomKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];

    return this.generateFromTemplate(randomKey as string, templateSet);
  }
}

export type Concept = typeof concepts[number];

type Language = {
  key?: string;
  name: string;
  family: string;
  description: string;
  vocabulary: { [key in Concept]: string };
  replacements?: { [key: string]: string };
}

class Dictionary {
  private vocabulary: { [key: string]: string };
  private replacements: { [key: string]: string } = {};

  constructor(
    public name: string,
    vocabulary: { [key: string]: string },
    replacements: { [key: string]: string } = {}
  ) {
    this.vocabulary = vocabulary;
    this.replacements = replacements;
  }

  translateDirect(...concepts: Concept[]): string {
    concepts = concepts.flat();
    // console.log(`Dictionary.translateDirect(): concepts=`, concepts);
    let translation = concepts.reduce((acc, concept) => {
      if (!(concept in this.vocabulary)) {
        throw new Error(`Concept "${concept}" not found in language "${this.name}"`);
      }

      return acc + (this.vocabulary[concept]);
    }, '');
    translation = translation
      // replace * and -
      .replace(/\*/g, '')
      .replace(/-/g, '')
      .replace(/  +/g, ' ')
      .trim();
    // return Words.capitalize(translation);
    return translation;
  }

  translate(...concepts: Concept[]): string {
    return this.standardize(
      this.translateDirect(...concepts)
    ).split(' ').map(capitalize).join(' ');
  }

  missingConcepts(): Concept[] {
    const missing: Concept[] = [];
    for (const concept of concepts) {
      if (!(concept in this.vocabulary)) {
        missing.push(concept);
      }
    }
    return missing;
  }

  private standardize(name: string): string {
    if (this.replacements) {
      for (const [key, value] of Object.entries(this.replacements)) {
        const regex = new RegExp(key, 'g');
        name = name.replace(regex, value);
      }
    }
    return name;
  }
}

export default class LanguageManager {
  languages: { [key: string]: Language } = {};
  defaultLanguage: string = "westron"; // common tongue

  constructor() {
    this.loadLanguages();
  }

  loadLanguages() {
    const languages: { [key: string]: Language } = importedLanguages;

    for (const key of Object.keys(languages)) {
      this.registerLanguage(key, languages[key] as Language);
    }
  }

  registerLanguage(key: string, lang: Language) {
    // console.log(`Registering language: ${key} (${lang.name})`);
    this.languages[key] = lang;
  }

  getDictionary(key: string): Dictionary {
    if (!(key in this.languages)) {
      console.warn(`Language "${key}" not found. Falling back to default language "${this.defaultLanguage}".`);
      key = this.defaultLanguage;
    }
    const lang = this.languages[key] as Language;
    return new Dictionary(lang.name, lang.vocabulary, lang.replacements);
  }

  getConceptory(key: string): {
    names: (kind: ConceptKind) => { concepts: Concept[]; translation: string };
  } {
    if (!(key in this.languages)) {
      console.warn(`Language "${key}" not found. Falling back to default language "${this.defaultLanguage}".`);
      key = this.defaultLanguage;
    }
    // const lang = this.languages[key] as Language;
    const dict = this.getDictionary(key);
    return {
      names: (kind: ConceptKind | 'person' | 'town') => {
        if (kind === 'person') {
          // use personalName template
          const concepts: Concept[] = Conceptory.generate('personalName');
          return { concepts, translation: dict.translate(...concepts) };
        } else if (kind === 'town') {
          // use townName template
          const concepts: Concept[] = Conceptory.generate('townName');
          return { concepts, translation: dict.translate(...concepts) };
        } else if (kind === 'mountain') {
          const concepts: Concept[] = Conceptory.generate('mountainName');
          return { concepts, translation: dict.translate(...concepts) };
        } else {
          const concepts: Concept[] = Conceptory.assemble(kind)
          return { concepts, translation: dict.translate(...concepts) };
        }
      }
    }
  }

  get availableLanguages(): Language[] {
    return Object.values(this.languages);
  }

  get availableLanguageKeys(): string[] {
    return Object.keys(this.languages);
  }

  static _instance: LanguageManager;
  static get instance(): LanguageManager {
    if (!LanguageManager._instance) {
      LanguageManager._instance = new LanguageManager();
    }
    return LanguageManager._instance;
  }
}
