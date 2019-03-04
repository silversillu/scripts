const arr = [2133, 435, 34, 234, 655, 345, 112, 4, 432, 6654, 1001];

const output = {
    tops: [],
    sum: 0,
    withTax: [],
    asc_1: [],
    asc_2: [],
    desc_1: [],
    desc_2: []
};

output.tops = arr.filter(v => v > 1000); // Filter in only the values over 1000
output.sum = arr.reduce((acc, cur) => acc + cur); // Get the sum of all values
output.withTax = arr.map(v => v * 1.1); // Add tax to all values
output.asc_1 = [...arr].sort((a, b) => (a > b ? 1 : 0)); // Sort values low to high
output.desc_1 = [...arr].sort((a, b) => (a < b ? 1 : 0)); // Sort values high to low
output.asc_2 = [...arr].sort((a, b) => a - b); // Sort values low to high
output.desc_2 = [...arr].sort((a, b) => b - a); // Sort values high to low

// [...arr] instead of just arr required because otherwise the values will get overwritten

console.log(output);
console.log({ output });
