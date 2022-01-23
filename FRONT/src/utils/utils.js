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
