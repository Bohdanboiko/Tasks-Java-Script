/**
 * Given two strings, first and second. Find all letters (ignoring case)
 * which are present in both strings. Ignore whitespaces.
 */
function getOverlappingLetters(first, second) {
  // Only change code below this line
  let set1 = new Set(first.toLowerCase()),
                set2 = new Set(second.toLowerCase()),
                result = "";
 
            for (let item of set1) {
                if (item !== " " && set2.has(item)) {
                    result += item;
                }
            }
            return result;
  // Only change code above this line
}
