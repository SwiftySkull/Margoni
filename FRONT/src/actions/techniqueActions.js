// ACTIONS TYPES

export const SAVE_TECHNIQUES = 'SAVE_TECHNIQUES';
export const SAVE_PAINTINGS_OF_TECHNIQUE = 'SAVE_PAINTINGS_OF_TECHNIQUE';
export const LOAD_PAINTINGS_BY_TECHNIQUE_TYPE = 'LOAD_PAINTINGS_BY_TECHNIQUE_TYPE';
export const LOAD_TECHNIQUE_SHUFFLED_PICTURES = 'LOAD_TECHNIQUE_SHUFFLED_PICTURES';
export const SAVE_TECHNIQUE_SHUFFLED_PICTURES = 'SAVE_TECHNIQUE_SHUFFLED_PICTURES';

// ACTIONS CREATORS

export const saveTechniques = (techniques) => ({
  type: SAVE_TECHNIQUES,
  techniques,
});

export const savePaintingsOfTechnique = (techniqueChosen, results, paintings) => ({
  type: SAVE_PAINTINGS_OF_TECHNIQUE,
  techniqueChosen,
  results,
  paintings,
});

export const loadPaintingsByTechniqueType = (select) => ({
  type: LOAD_PAINTINGS_BY_TECHNIQUE_TYPE,
  select,
});

export const saveTechniqueShuffledPictures = (picture, techniques) => ({
  type: SAVE_TECHNIQUE_SHUFFLED_PICTURES,
  picture,
  techniques,
});

export const loadTechniqueShuffledPictures = (techniques) => ({
  type: LOAD_TECHNIQUE_SHUFFLED_PICTURES,
  techniques,
});
