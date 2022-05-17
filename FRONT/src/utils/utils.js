import {
  figure as F,
  paysage as P,
  marine as M,
} from './formatConversion';

export const imageUrl = 'https://back.denise-margoni.fr/';
export const smallImageUrl = 'https://back.denise-margoni.fr/Small/';

/**
 * Shuffles an array and returns an amount of entry specified or all the array shuffled
 *
 * @param {array} array Array to shuffle
 * @param {string} nbEntries Number of entries desired
 *                      (by default it can be null so it will return the total array)
 * @returns Array shuffled of a number of entries selected or all the array
 */
export const shuffleCategories = (array, nbEntries = null) => {
  let entries = nbEntries;

  if (nbEntries === null) {
    entries = array.length;
  }

  const arraySize = array.length;

  const shuffledCategories = [];

  if (arraySize > 0) {
    const shuffledId = [];

    for (let index = 0; shuffledId.length < entries; index++) {
      const random = Math.floor(Math.random() * arraySize);
      if (!shuffledId.includes(random)) {
        shuffledId.push(random);
      }
    }

    for (let index = 0; index < entries; index++) {
      shuffledCategories.push(array[shuffledId[index]]);
    }
  }

  return shuffledCategories;
};

/**
 * Method to get the corresponding pictures to the selected categories.
 *
 * @param {array} pictures Array of all the pictures to check
 * @param {array} categories Array of the selected categories
 * @returns Array of the corresponding pictures
 */
export const getPictureFromCategory = (pictures, categories) => {
  const arrayNotEmpty = categories.length > 0 && pictures.length > 0;

  if (arrayNotEmpty) {
    const picturesFilterder = pictures.filter((pic) => {
      for (const iterator of categories) {
        if (iterator.id == pic.id) {
          return pic;
        }
      }
    });

    return picturesFilterder;
  }
};

/**
 * Change a string so it's URL friendly
 *
 * @param {string} string The string to change
 * @returns A new string IRL friendly
 */
export const stringForUrl = (string = '') => {
  const newString = string
    .toLowerCase()
    .replace(/[ '/,]/g, '-')
    .replace('à', 'a')
    .replace(/[éèê]/g, 'e')
    .replace('ù', 'u')
    .replace('ô', 'o')
    .replace('ç', 'c');

  return newString;
};

/**
 * Convert a url string into a readable String, especially for the axios request
 *
 * @param {string} url URL to transform
 * @returns a readable string, not url format
 */
export const urlToString = (url) => {
  const stringFromUrl = url
    .replace(/-/g, ' ')
    .replace(/-l-/g, ' l\'');

  return stringFromUrl;
};

/**
 * Convert the format of a painting into it's height and width
 *
 * @param {string} format Size of the painting
 * @returns String for the heifht and width of the painting
 */
export const formatConversion = (format) => {
  const { length } = format;

  let formatConverted = ' --- ';

  if (format === 'Sans format') {
    return '';
  }

  const letter = format.slice(length - 1);
  const number = format.slice(0, length - 1);

  if (letter === 'F') {
    formatConverted += `${F[number].height} x ${F[number].width}`;
  }

  if (letter === 'P') {
    formatConverted += `${P[number].height} x ${P[number].width}`;
  }

  if (letter === 'M') {
    formatConverted += `${M[number].height} x ${M[number].width}`;
  }

  formatConverted += ' cm';

  return formatConverted;
};
