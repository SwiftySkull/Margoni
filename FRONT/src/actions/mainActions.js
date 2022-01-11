// ACTIONS TYPES

export const DISPLAY_PAINTINGS = 'DISPLAY_PAINTINGS';
export const XXX = 'XXX';

// ACTIONS CREATORS

export const displayPaintings = () => ({
  type: DISPLAY_PAINTINGS,
});

export const xxx = (result) => ({
  type: XXX,
  totalPaintings: result[0],
  paintings: result[1],
});
