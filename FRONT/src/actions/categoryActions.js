// ACTIONS TYPES

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SHUFFLED_PICTURES = 'SHUFFLED_PICTURES';
export const LOAD_SHUFFLED_PICTURES = 'LOAD_SHUFFLED_PICTURES';
export const LOAD_PAINTINGS_OF_CATEGORY = 'LOAD_PAINTINGS_OF_CATEGORY';
export const SAVE_PAINTINGS_OF_CATEGORY = 'SAVE_PAINTINGS_OF_CATEGORY';

// ACTIONS CREATORS

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const shuffledPictures = (picture, categories) => ({
  type: SHUFFLED_PICTURES,
  picture,
  categories,
});

export const loadShuffledPictures = (categories) => ({
  type: LOAD_SHUFFLED_PICTURES,
  categories,
});

export const loadPaintingsOfCategory = (id, select) => ({
  type: LOAD_PAINTINGS_OF_CATEGORY,
  id,
  select,
});

export const savePaintingsOfCategory = (categoryChosen, results, paintings) => ({
  type: SAVE_PAINTINGS_OF_CATEGORY,
  categoryChosen,
  results,
  paintings,
});
