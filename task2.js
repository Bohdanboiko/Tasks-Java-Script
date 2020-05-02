/*
 * Given an array of countries with their population.
 * Calculate average population of the countries.
 * 
 * [
 *   { name: 'Ukraine', population: 42 000 000},
 *   { name: 'Belarus', population: 9 500 000},
 *   { name: 'Moldova', population: 3 500 000},
 *   { name: 'Switzerland', population: 8 400 000}
 * ]
 * 
 * Total population = 42M + 9.5M + 3.5M + 8.4M = 63.4M
 */
function calculateAverageCountryPopulation(countries) {
  // Only change code below this line
 function average( source,  selector) {
                let res = 0,
                    count = 0;
                if (selector)
                    for (let v of source) {
                        let v2 = selector(v);
                        if (Number.isFinite(v2)) {
                            res += v2;
                            ++count;
                        }
                    }
                else
                    for (let v of source) {
                        if (Number.isFinite(v)) {
                            res += v;
                            ++count;
                        }
                    }
                if (count)
                    return res / count;
 
                return 0; 
            }
 
            return average(countries, e => e.population);
            // Only change code above this line