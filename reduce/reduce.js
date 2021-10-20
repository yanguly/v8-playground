// d8 --print-ast reduce.js > reduce-ast.txt

const array = [1, 2, 3, 4];

array.reduce((previousValue, currentValue) => previousValue + currentValue);