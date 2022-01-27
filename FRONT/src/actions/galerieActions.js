// ACTIONS TYPES

export const CHOOSE_GALERIE = 'CHOOSE_GALERIE';

// ACTIONS CREATORS

export const chooseGalerie = (id) => ({
  type: CHOOSE_GALERIE,
  id,
});
