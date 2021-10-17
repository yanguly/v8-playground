/**
 * 
 */

function add(a, b) {
  return a + b;
}

add(1, 2);
add(3, 4);

// Native V8 function
%OptimizeFunctionOnNextCall(add);
// Call optimized function
add(5, 6);