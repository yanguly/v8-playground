// d8 --trace-turbo-inlining inlining/inlining.js > inlining/inlining-result.txt
// d8 --trace-opt inlining/inlining.js > inlining/inlining-opt.txt

function square(x) {
    return x * x;
}
   
function f(x) {
    let sum = 0;
    for (let i = 0; i < x; i++) {
        sum += square(i);
    }

    return sum;
}

for (let x = 0; x < 10000; ++x) f(10000);
