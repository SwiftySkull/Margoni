// ACTIONS TYPES

export const DISPLAY_PAINTINGS = 'DISPLAY_PAINTINGS';
export const LOAD_ELEMENTS = 'LOAD_ELEMENTS';
export const LOAD_PAINTING = 'LOAD_PAINTING';
export const SAVE_PAINTING = 'SAVE_PAINTING';
export const LOAD_PAINTING_BY_NAME = 'LOAD_PAINTING_BY_NAME';
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

export const loadPainting = (id) => ({
  type: LOAD_PAINTING,
  id,
});

export const savePainting = (painting) => ({
  type: SAVE_PAINTING,
  painting,
});

export const loadPaintingByName = (paintingName) => ({
  type: LOAD_PAINTING_BY_NAME,
  paintingName,
});
