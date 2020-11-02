var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });

    router.post("/", function(req, res) {
        burger.insertOne("burger_name",
          req.body.name, function() {
          res.redirect("/");
        });
      });

router.put("/", function(req, res){   //or is it("/", ) or api/burgers/:id
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: true
        },
        condition,
        function(result) {
            if (result.changedRows === 0){
                return res.status(404).end();
            }
        }
    );

});


module.exports = router;