
/*
Random number generator - returns an integer in the range [min, max)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

for(i = 0; i < 100; i++) {
  console.log(getRandomInt(11, 83));
}
