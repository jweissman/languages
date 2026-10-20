import { describe, it, expect } from 'bun:test';
import LanguageManager from '../src/Language';

describe('Language features', () => {
  const langManager = LanguageManager.instance;

  it('should load languages correctly', () => {
    const westron = langManager.getDictionary('westron');
    expect(westron).not.toBeNull();
    expect(westron.name).toBe('Westron');
    expect(westron.missingConcepts()).toEqual([]);
    expect(westron.translate('earth')).toBe('Aarde');
    expect(westron.translate('sky')).toBe('Lucht');
    expect(westron.translate('firmament')).toBe('Heofon');
    expect(westron.translate('fire')).toBe('Fýr');
    expect(westron.translate('star')).toBe('Steorra');

    const quenya = langManager.getDictionary('quenya');
    expect(quenya).not.toBeNull();
    expect(quenya?.name).toBe('Quenya');
    expect(quenya.missingConcepts()).toEqual([]);
    expect(quenya.translate('earth')).toBe('Amar');
    expect(quenya.translate('sky')).toBe('Ell');
    expect(quenya.translate('firmament')).toBe('Menel');
    expect(quenya.translate('fire')).toBe('Nár');
    expect(quenya.translate('star')).toBe('Elen');

    const khuzdul = langManager.getDictionary('khuzdul');
    expect(khuzdul).not.toBeNull();
    expect(khuzdul?.name).toBe('Khuzdul');
    expect(khuzdul.missingConcepts()).toEqual([]);
    expect(khuzdul.translate('earth')).toBe('Ardhan');
    expect(khuzdul.translate('sky')).toBe('Rakiya');
    expect(khuzdul.translate('firmament')).toBe('Zul');
    expect(khuzdul.translate('fire')).toBe('Esh');
    expect(khuzdul.translate('star')).toBe('Kochav');
  });

  it('should translate westron words correctly', () => {
    const westron = langManager.getDictionary('westron');
    expect(westron).not.toBeNull();

    expect(westron.translate('silver', 'river')).toEqual('Seolforex');
    expect(westron.translate('at-', 'divine')).toEqual('Aettýr');
    expect(westron.translate('swans', 'haven')).toEqual('Ilfetuhaff');
    expect(westron.translate('dream', 'island')).toEqual('Drēamīegland');
    expect(westron.translate('lonely', 'isle')).toEqual('Syndrigyle');
    expect(westron.translate('land', 'pine')).toEqual('Londpintreow');
    expect(westron.translate('mound', 'summer')).toEqual('Telhaf');
    expect(westron.translate('tall', 'white', 'point')).toEqual('Brantalbegad');
    expect(westron.translate('spirit', 'fire')).toEqual('Arodnesfýr');
  });

  it('should translate quenya words correctly', () => {
    const quenya = langManager.getDictionary('quenya');
    expect(quenya).not.toBeNull();

    expect(quenya.translate('spark', '-maid')).toEqual('Tinuviel');
    expect(quenya.translate('silver', 'river')).toEqual('Celebrant');
    expect(quenya.translate('at-', 'divine')).toEqual('Avallónë');
    expect(quenya.translate('swans', 'haven')).toEqual('Alqualondë');
    expect(quenya.translate('eagles', 'stars')).toEqual('Thorongil');
    expect(quenya.translate('mound', 'summer')).toEqual('Corollairë');
    expect(quenya.translate('tall', 'white', 'point')).toEqual('Taniquetil');
    expect(quenya.translate('spirit', 'fire')).toEqual('Fëanor');
    expect(quenya.translate('magic', '-woman')).toEqual('Lûthien');
    expect(quenya.translate('dream', 'island')).toEqual('Lórien');
    expect(quenya.translate('isle', 'lonely')).toEqual('Tol Eressëa');
    expect(quenya.translate('land', 'pine')).toEqual('Dorthonion');

    expect(quenya.translate('tyranny', 'mountain-chain')).toEqual('Thangorodrim');
    expect(quenya.translate('fire', 'stronghold')).toEqual('Nárgothrond');
    expect(quenya.translate('gray', 'mantle')).toEqual('Thingol');
    expect(quenya.translate('iron', 'prison')).toEqual('Angband');
    expect(quenya.translate('black', 'foe')).toEqual('Morgoth');
    expect(quenya.translate("ice", "fangs")).toEqual("Helcaraxë");
    expect(quenya.translate("ever-", "snow")).toEqual("Oiolossë");
    expect(quenya.translate("mist", "needle")).toEqual("Hithaeglin");
    expect(quenya.translate("mist", "shadow")).toEqual("Hithlum");
    expect(quenya.translate("mountain", "pale", "horns")).toEqual("Ered Nimrais");
    expect(quenya.translate("ship", "smith")).toEqual("Círdan");
    expect(quenya.translate("holly", "land")).toEqual("Eregion");
    expect(quenya.translate("hill", "fate")).toEqual("Amon Amarth");
    expect(quenya.translate("rock", "song")).toEqual("Gondolindë");
    expect(quenya.translate("spray", "star")).toEqual("Vingelot");
    expect(quenya.translate("silver", "foot")).toEqual("Celebrinda");
  });

  it('should translate khuzdul words correctly', () => {
    const khuzdul = langManager.getDictionary('khuzdul');
    expect(khuzdul).not.toBeNull();

    expect(khuzdul.translate('stone')).toBe('Sela');
    expect(khuzdul.translate('mountain')).toBe('Har');
    expect(khuzdul.translate('great', 'fortress')).toBe('Gabilgathor');
  });

  // it('should handle existing terrain features', () => {
  //   const westron = langManager.getDictionary('westron');
  //   const quenya = langManager.getDictionary('quenya');
  //   const khuzdul = langManager.getDictionary('khuzdul');
  //   Template.bootstrapDeem();
  //   const terrainKinds = Deem.evaluate("gather(terrainFeatures)", { setting: 'fantasy'})
  //   for (const kind of terrainKinds as string[]) {
  //     const commonTx = westron?.translate(kind as Concept);
  //     expect(commonTx).toBeDefined();
  //     const elvishTx = quenya?.translate(kind as Concept);
  //     expect(elvishTx).toBeDefined();
  //     const dwarvishTx = khuzdul?.translate(kind as Concept);
  //     expect(dwarvishTx).toBeDefined();

  //     const features = Deem.evaluate(`gatherEntries(terrainFeatures, ${JSON.stringify(kind)})`);
  //     for (const feature of features as Concept[]) {
  //       const commonTranslation = westron?.translate(feature);
  //       expect(commonTranslation).toBeDefined();

  //       const elvishTranslation = quenya?.translate(feature);
  //       expect(elvishTranslation).toBeDefined();

  //       const dwarvishTranslation = khuzdul?.translate(feature);
  //       expect(dwarvishTranslation).toBeDefined();
  //     }

  //     const affixes = Deem.evaluate(`gatherEntries(townAffixes, ${JSON.stringify(kind)})`);
  //     for (const affix of affixes as Concept[]) {
  //       const commonTranslation = westron?.translate(affix);
  //       expect(commonTranslation).toBeDefined();

  //       const elvishTranslation = quenya?.translate(affix);
  //       expect(elvishTranslation).toBeDefined();

  //       const dwarvishTranslation = khuzdul?.translate(affix);
  //       expect(dwarvishTranslation).toBeDefined();
  //     }
  //   }
  // })
});