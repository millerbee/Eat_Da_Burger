var connection = require("../config/connection.js");


function printQuestionMarks(num) {
    var arr = [];


    for (var i = 0; i < num; i++) {
        arr.push("?");
      }
    
      return arr.toString();
    }


    function objToSql(ob) {
        var arr = [];

        for (var key in ob) {
            var value = ob[key];

    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (The Vegan => 'The Vegan')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'The Vegan} => ["name='The Vegan'"]
        // e.g. {devoured: true} => ["devoured=true"]
        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
}

var orm = {     
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";  //?? or not?
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?);", [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
     
    
      updateOne: function(table, objColVals, condition, cb) {
        connection.query("UPDATE ?? SET ? WHERE ?;", [table, objColVals, condition], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    };
    
    
  module.exports = orm;
  