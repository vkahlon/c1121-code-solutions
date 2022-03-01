/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) Excellent
  const unique = [];                // 1 * 1 = O(1) Excellent
  for (
    let i = 0;                      // 1 * 1 = O(1) Excellent
    i < words.length;               // 2 * n = O(2n) ~= O(n) Fair
    i++                             // 2 * n = O(2n) ~= O(n) Fair
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) Fair
    if (!seen[word]) {              // 1 * 1 = O(1) Excellent
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(2n) ~= O(n) Fair
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n) Fair

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) Excellent
  for (
    let i = 0;                      // 1 * 1 = O(1) Excellent
    i < words.length;               // 2 * n = O(2n) ~= O(n) Fair
    i++                             // 2 * n = O(2n) ~= O(n) Fair
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) Fair
    let isUnique = true;            // 1 * 1 = O(1) Excellent
    for (
      let c = 0;                    // 1 * 1 = O(1) Excellent
      c < i;                        // 2 * n^2 = O(n^2) Horrible
      c++                           // // 2 * n^2 = O(n^2) Horrible
    ) {
      const comparing = words[c];   // 2 * n^2 = O(n^2) Horrible
      if (comparing === word) {     // 2 * n^2 = O(n^2) Horrible
        isUnique = false;           // 2 * n^2 = O(n^2) Horrible
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1) Excellent
      unique[unique.length] = word; // 2 * n = O(2n) ~= O(n) Fair
    }
  }
  return unique;                    // 1 * 1 = O(1) Excellent
} // Big O Notation for uniqueQuadratic: // 2 * n^2 = O(n^2) Horrible
