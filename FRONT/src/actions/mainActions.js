// ACTIONS TYPES

export const DISPLAY_PAINTINGS = 'DISPLAY_PAINTINGS';
export const LOAD_ELEMENTS = 'LOAD_ELEMENTS';
export const LOAD_PAINTING = 'LOAD_PAINTING';
export const SAVE_PAINTING = 'SAVE_PAINTING';
export const LOAD_PAINTING_BY_NAME = 'LOAD_PAINTING_BY_NAME';
export const MODAL_STATUS = 'MODAL_STATUS';
export const SELECT_PAGE = 'SELECT_PAGE';
export const PAINTING_OF_PAGE = 'PAINTING_OF_PAGE';
export const LOADER_ON = 'LOADER_ON';
export const LOADER_OFF = 'LOADER_OFF';
export const CLEAR_PAINTING = 'CLEAR_PAINTING';
export const SAVE_MULTIPLE_PAINTINGS = 'SAVE_MULTIPLE_PAINTINGS';
export const DISPLAY_MENU = 'DISPLAY_MENU';

// ACTIONS CREATORS

export const displayPaintings = () => ({
  type: DISPLAY_PAINTINGS,
});

export const loadElements = () => ({
  type: LOAD_ELEMENTS,
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

export const displayModal = () => ({
  type: MODAL_STATUS,
});

export const selectPage = (page) => ({
  type: SELECT_PAGE,
  page,
});

export const paintingOfPage = (page, choice, select, selectId) => ({
  type: PAINTING_OF_PAGE,
  page,
  choice,
  select,
  selectId,
});

export const loaderOn = () => ({
  type: LOADER_ON,
});

export const loaderOff = () => ({
  type: LOADER_OFF,
});

export const clearPainting = () => ({
  type: CLEAR_PAINTING,
});

export const saveMultiplePaintings = (paintings) => ({
  type: SAVE_MULTIPLE_PAINTINGS,
  paintings,
});

export const displayMenu = () => ({
  type: DISPLAY_MENU,
});
