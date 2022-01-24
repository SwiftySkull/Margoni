// ACTIONS TYPES

export const DISPLAY_PAINTINGS = 'DISPLAY_PAINTINGS';
export const LOAD_ELEMENTS = 'LOAD_ELEMENTS';
export const XXX = 'XXX';

// ACTIONS CREATORS

export const displayPaintings = () => ({
  type: DISPLAY_PAINTINGS,
});

export const loadElements = () => ({
  type: LOAD_ELEMENTS,
});

export const xxx = (result) => ({
  type: XXX,
  totalPaintings: result[0],
  paintings: result[1],
});
