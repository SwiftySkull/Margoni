// ACTIONS TYPES

export const DISPLAY_PAINTINGS = 'DISPLAY_PAINTINGS';
export const LOAD_HOME_PAGE = 'LOAD_HOME_PAGE';
export const XXX = 'XXX';

// ACTIONS CREATORS

export const displayPaintings = () => ({
  type: DISPLAY_PAINTINGS,
});

export const loadHomePage = () => ({
  type: LOAD_HOME_PAGE,
});

export const xxx = (result) => ({
  type: XXX,
  totalPaintings: result[0],
  paintings: result[1],
});
