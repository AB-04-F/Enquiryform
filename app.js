const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const cors = require("cors");

var indexRouter = require("./routes/index");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", indexRouter);
// app.use("/index", require("./routes/index"));

// app.get("/form", function(req, res) {
//     res.render("bike");
// });

// app.post("/form", function(req, res) {
//     console.log(req.body);
//     var sql =
//         "INSERT INTO userdata (firstname, lastname, email, phone, city, state, country,bikes,prize,subject )VALUES('" +
//         req.body.firstname +
//         "','" +
//         req.body.lastname +
//         "','" +
//         req.body.email +
//         "','" +
//         req.body.phone +
//         "','" +
//         req.body.city +
//         "','" +
//         req.body.state +
//         "','" +
//         req.body.country +
//         "','" +
//         req.body.bikes +
//         "','" +
//         req.body.prize +
//         "','" +
//         req.body.subject +
//         "')";

//     res.render("thanks");

//     con.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Data Saved!");
//         console.log(result);
//     });
// });

app.listen(port, function(req, res) {
    console.log(`server is running on ${port}`);
});