
/*
Random number generator - returns an integer in the range [min, max)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};


/*
Implementation of the Fisher-Yates shuffle to randomize the choices
  in-place shuffle, modifies the original array
  time complexity: O(n)
  https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/
function shuffleArray(arr) {
  n = arr.length;
  for(i = n-1; i >= 1; i--) {
    j = getRandomInt(0, i+1);           // max excluded, 0 < =j <= i as required
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};


int_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const generatorButton = document.querySelector('#generateButton');
generatorButton.addEventListener('click', () => {
  console.log(shuffleArray(int_array));
});