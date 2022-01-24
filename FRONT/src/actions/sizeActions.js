// ACTIONS TYPES

export const SAVE_SIZES = 'SAVE_SIZES';
export const SIZE_CHOICE = 'SIZE_CHOICE';
export const SAVE_SIZE_CHOICE = 'SAVE_SIZE_CHOICE';
export const SAVE_SIZE_SEARCH = 'SAVE_SIZE_SEARCH';

// ACTIONS CREATORS

export const saveSizes = (sizes) => ({
  type: SAVE_SIZES,
  sizes,
});

export const sizeChoice = (id) => ({
  type: SIZE_CHOICE,
  id,
});

export const saveSizeChoice = (sizeChosen, results, paintings) => ({
  type: SAVE_SIZE_CHOICE,
  sizeChosen,
  results,
  paintings,
});

export const saveSizeSearch = () => ({
  type: SAVE_SIZE_SEARCH,
});
