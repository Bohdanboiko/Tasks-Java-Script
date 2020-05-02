/* 
 * Implement reverse function, which takes string as an
 * argument and returns string with characters in reversed order.
 * 
 * EXAMPLES:
 * reverse('asdf') = 'fdsa';
 * reverse('1234567890') = '0987654321';
 * reverse('') = ''
 * reverse('AAA') = 'AAA';
 */
function reverse(str) {
  // Only change code below this line
      var str2 = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        str2 += str.charAt(i);
    }
return str2;

  
  // Only change code above this line
}