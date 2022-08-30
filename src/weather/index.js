const { response } = require("express");

console.log("JavaScript File is Loaded");
fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
