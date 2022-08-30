// const path = require("path");
// const express = require("express");
// const data = express();
// const join = path.join(__dirname, "../public");
// data.use(express.static(join));
// data.get("", (req, res) => {
//   res.send("<h1>Hello to the Server!</h1>");
// });
// data.get("/help", (req, res) => {
//   res.send("<h1 align-center>Need Help</h1>");
// });
// data.get("/json", (req, res) => {
//   res.send({
//     name: "Ammar",
//     location: "Arfa",
//     catagory: "Student",
//   });
// });
// data.listen(7000, (port) => {
//   console.log("Server runs in port 7000");
// });
// // console.log(__dirname);

// // console.log(join);
// const express = require("express");
// const path = require("path");
// const app = express();
// const pathing = path.join(__dirname, "../public");
// console.log(pathing);
// // app.use(express.static(pathing));
// app.set("view engine", "hbs");
// app.get("", (req, res) => {
//   res.render("index", {
//     title: "Hello hbs",
//   });
// });
// app.get("", (req, res) => {
//   res.send("<h1>Hello to the Get</h1>");
// });
// app.listen(3000, () => {
//   console.log("Serving at port 3000");
// });
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./weather/url");
const { response } = require("express");
const data = express();
/////Path Define//////
const pathing = path.join(__dirname, "../public");
const pathviews = path.join(__dirname, "../templetes/views");
const partialsPath = path.join(__dirname, "../templetes/partials");
// data.get("", (req, res) => {
//   res.render("index", {
//     title: "Rendring",
//   });
// });
///////Setup Handelbars////////
data.set("view engine", "hbs");
data.set("views", pathviews);
hbs.registerPartials(partialsPath);
data.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
  });
});
data.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
  });
});
data.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us",
  });
});
data.get("/download", (req, res) => {
  // if (!req.query.address) {
  //   return res.send({ error: "No search Found" });
  // }
  console.log(req.query.address);
  geoCode(req.query.address, (error, response) => {
    if (error) {
      return res.send({ error: error });
    }
    res.send({
      data: "Here to Download the Content",
      address: req.query.address,
      result: response,
    });
  });
  // console.log(req.query.search);
});
data.get("/node", (req, res) => {
  // res.send("<h1>Hello to Express</h1>");
  geoCode(req.query.address, (error, response = {}) => {
    if (error) {
      return res.send({ error });
    }
    console.log(response);
    res.send({
      // data: "Here to Download the Content",
      // address: req.query.address,
      result: response,
    });
  });
});
data.get("*", (req, res) => {
  //   res.send("<h1>Page Not Found 404</h1>");
  res.render("404", {
    title: "404",
    errorMessage: "Page Not Found 404",
  });
});
data.listen(3000, () => {
  console.log("Rendring at port 3000");
});
