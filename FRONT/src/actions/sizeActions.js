// ACTIONS TYPES

export const SAVE_SIZES = 'SAVE_SIZES';
export const SIZE_CHOICE = 'SIZE_CHOICE';
export const LOAD_PAINTINGS_OF_SIZE = 'LOAD_PAINTINGS_OF_SIZE';
export const SAVE_PAINTINGS_OF_SIZE = 'SAVE_PAINTINGS_OF_SIZE';

// ACTIONS CREATORS

export const saveSizes = (sizes) => ({
  type: SAVE_SIZES,
  sizes,
});

export const sizeChoice = (id) => ({
  type: SIZE_CHOICE,
  id,
});

export const loadPaintingsOfSize = (id, select) => ({
  type: LOAD_PAINTINGS_OF_SIZE,
  id,
  select,
});

export const savePaintingsOfSize = (sizeChosen, results, paintings) => ({
  type: SAVE_PAINTINGS_OF_SIZE,
  sizeChosen,
  results,
  paintings,
});
