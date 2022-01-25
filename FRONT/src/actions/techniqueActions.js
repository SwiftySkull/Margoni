// ACTIONS TYPES

export const SAVE_TECHNIQUES = 'SAVE_TECHNIQUES';
export const LOAD_PAINTINGS_OF_TECHNIQUE = 'LOAD_PAINTINGS_OF_TECHNIQUE';
export const SAVE_PAINTINGS_OF_TECHNIQUE = 'SAVE_PAINTINGS_OF_TECHNIQUE';
export const LOAD_PAINTINGS_BY_TECHNIQUE_TYPE = 'LOAD_PAINTINGS_BY_TECHNIQUE_TYPE';

// ACTIONS CREATORS

export const saveTechniques = (techniques) => ({
  type: SAVE_TECHNIQUES,
  techniques,
});

export const loadPaintingsOfTechnique = (id, select) => ({
  type: LOAD_PAINTINGS_OF_TECHNIQUE,
  id,
  select,
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
