// ACTIONS TYPES

export const SAVE_SIZES = 'SAVE_SIZES';
export const SIZE_CHOICE = 'SIZE_CHOICE';
export const SAVE_PAINTINGS_OF_SIZE = 'SAVE_PAINTINGS_OF_SIZE';
export const LOAD_PAINTINGS_BY_SIZE_FORMAT = 'LOAD_PAINTINGS_BY_SIZE_FORMAT';

// ACTIONS CREATORS

export const saveSizes = (sizes) => ({
  type: SAVE_SIZES,
  sizes,
});

export const sizeChoice = (id) => ({
  type: SIZE_CHOICE,
  id,
});

export const savePaintingsOfSize = (sizeChosen, results, paintings) => ({
  type: SAVE_PAINTINGS_OF_SIZE,
  sizeChosen,
  results,
  paintings,
});

export const loadPaintingsBySizeFormat = (select) => ({
  type: LOAD_PAINTINGS_BY_SIZE_FORMAT,
  select,
});
