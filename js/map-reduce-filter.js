const arr = [2133, 435, 34, 234, 655, 345, 112, 4, 432, 6654, 1001];

const output = {
    tops: [],
    sum: 0,
    withTax: []
};

output.tops = arr.filter(v => v > 1000); // Filter in only the values over 1000
output.sum = arr.reduce((acc, cur) => acc + cur); // Get the sum of all values
output.withTax = arr.map(v => v * 1.1); // Add tax to all values

console.log(output);
console.log({ output });
