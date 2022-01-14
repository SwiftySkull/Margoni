// ACTIONS TYPES

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SHUFFLED_PICTURES = 'SHUFFLED_PICTURES';
export const LOAD_SHUFFLED_PICTURES = 'LOAD_SHUFFLED_PICTURES';

// ACTIONS CREATORS

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const shuffledPictures = (picture) => ({
  type: SHUFFLED_PICTURES,
  picture,
});

export const loadShuffledPictures = (length) => ({
  type: LOAD_SHUFFLED_PICTURES,
  length,
});
