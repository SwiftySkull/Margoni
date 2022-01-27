// ACTIONS TYPES

export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const SAVE_CATEGORY_SHUFFLED_PICTURES = 'SAVE_CATEGORY_SHUFFLED_PICTURES';
export const LOAD_CATEGORY_SHUFFLED_PICTURES = 'LOAD_CATEGORY_SHUFFLED_PICTURES';
export const LOAD_PAINTINGS_OF_CATEGORY = 'LOAD_PAINTINGS_OF_CATEGORY';
export const SAVE_PAINTINGS_OF_CATEGORY = 'SAVE_PAINTINGS_OF_CATEGORY';
export const LOAD_PAINTINGS_BY_CATEGORY_NAME = 'LOAD_PAINTINGS_BY_CATEGORY_NAME';

// ACTIONS CREATORS

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
});

export const saveCategoryShuffledPictures = (picture, categories) => ({
  type: SAVE_CATEGORY_SHUFFLED_PICTURES,
  picture,
  categories,
});

export const loadCategoryShuffledPictures = (categories) => ({
  type: LOAD_CATEGORY_SHUFFLED_PICTURES,
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

export const loadPaintingsByCategoryName = (select) => ({
  type: LOAD_PAINTINGS_BY_CATEGORY_NAME,
  select,
});
