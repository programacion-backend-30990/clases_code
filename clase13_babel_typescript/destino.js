"use strict";

// npm install @babel/core @babel/cli @babel/present-env
var lista = [2, 4, 18, -4, 5];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
