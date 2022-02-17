
const transpose = function(matrix) {
  // Put your solution here
  let output = [];
  for (let x = 0; x < matrix[0].length; x++) {
    output.push([]); // push empty arrays for how many indexes
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output[j].push(matrix[i][j]); // loop through each array and push the values of your to output
    }
  }
  return output;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters);
  console.log(verticalJoin);
  for (const l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  for (const l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;
};

module.exports = wordSearch;


// const transpose = function(matrix) {
//   // Put your solution here
//   let output = [];
//   for (let x = 0; x < matrix[0].length; x++) {
//     output.push([]); // push empty arrays for how many indexes
//   }
     
   
 
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       output[j].push(matrix[i][j]); // loop through each array and push the values of your to output
//     }
//   }
//   return output;
// };


// const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map(ls => ls.join(''))
//   const verticalJoin = transpose(letters)
//   console.log(verticalJoin)
//   for (l of verticalJoin) {
//       if (l.includes(word))
//       return true
//   }
//   for (l of horizontalJoin) {
//       if (l.includes(word))
//       return true
//   }
// return false;
// }



// module.exports = wordSearch