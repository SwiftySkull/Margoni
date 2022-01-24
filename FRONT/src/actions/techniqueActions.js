// ACTIONS TYPES

export const SAVE_TECHNIQUES = 'SAVE_TECHNIQUES';

// ACTIONS CREATORS

export const saveTechniques = (techniques) => ({
  type: SAVE_TECHNIQUES,
  techniques,
});
