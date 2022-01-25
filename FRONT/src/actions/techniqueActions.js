// ACTIONS TYPES

export const SAVE_TECHNIQUES = 'SAVE_TECHNIQUES';
export const LOAD_PAINTINGS_OF_TECHNIQUE = 'LOAD_PAINTINGS_OF_TECHNIQUE';
export const SAVE_PAINTINGS_OF_TECHNIQUE = 'SAVE_PAINTINGS_OF_TECHNIQUE';

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
