const { response } = require("express");
const request = require("request");
// const geoCode = (address, callback) => {
//   const api = "79ad703bcf63b62e8162a4a8a8c6946f";
//   let apiLan = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${api}`;
//   request({ url: apiLan, json: true }, (error, response) => {
//     error
//       ? callback("Error! Failed to Connect", undefined)
//       : callback(undefined, {
//           response: response.body.coord,
//         });
//     console.log(response.body.coord);
//   });
// };
// const lan = (address) => {
//   const api = "79ad703bcf63b62e8162a4a8a8c6946f";
//   const apiLan = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${api}`;
//   request({ url: apiLan, json: true }, (error, response) => {
//     error ? console.log("Location Not Found") : console.log(response.body);
//   });
// };
// // lan("London");
// const geoCode = (address, callback) => {
//   const api = "79ad703bcf63b62e8162a4a8a8c6946f";
//   let apiLan = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${api}`;
//   request({ url: apiLan, json: true }, (error, response) => {
//     error
//       ? callback("Error! Failed to Connect", undefined)
//       : callback(undefined, {
//           response: response.body.coord,
//           latitude: response.body.coord.lat,
//         });
//   });
// };
const geoCode = (address, callback) => {
  const api = "79ad703bcf63b62e8162a4a8a8c6946f";
  let apiLan = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${api}`;
  request({ url: apiLan, json: true }, (error, response) => {
    error
      ? callback("error", undefined)
      : callback(undefined, {
          response: response.body.coord,
          // latitude: response.body.coord.lat,
        });
  });
};
module.exports = geoCode;
