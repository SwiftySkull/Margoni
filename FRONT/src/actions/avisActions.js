// ACTIONS TYPES

export const SAVE_AVIS = 'SAVE_AVIS';
export const GET_AVIS = 'GET_AVIS';
export const SAVE_ALL_AVIS = 'SAVE_ALL_AVIS';

// ACTIONS CREATORS

export const saveAvis = (avis) => ({
  type: SAVE_AVIS,
  avis,
});

export const getAvis = () => ({
  type: GET_AVIS,
});

export const saveAllAvis = (avis) => ({
  type: SAVE_ALL_AVIS,
  avis,
});
