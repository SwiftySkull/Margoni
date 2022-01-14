/**
 * Shuffles an array and returns an amount of entry specified or all the array shuffled
 *
 * @param {*} array Array to shuffle
 * @param {*} nbEntries Number of entries desired
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

export const truc = () => true;
