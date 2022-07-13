const express = require("express");

const router = express.Router();

const mysql = require("mysql");
const con = require("../dbconnection");

router.get("/form", function(req, res) {
    res.render("bike");
});

router.post("/form", function(req, res) {
    var sql =
        "INSERT INTO userdata (firstname, lastname, email, phone, city, state, country,bikes,prize,subject,address )VALUES('" +
        req.body.firstname +
        "','" +
        req.body.lastname +
        "','" +
        req.body.email +
        "','" +
        req.body.phone +
        "','" +
        req.body.city +
        "','" +
        req.body.state +
        "','" +
        req.body.country +
        "','" +
        req.body.bikes +
        "','" +
        req.body.prize +
        "','" +
        req.body.subject +
        "','" +
        req.body.address;
    ("')");

    res.render("thanks");

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Data Saved!");
        console.log(result);
    });
});
module.exports = router;