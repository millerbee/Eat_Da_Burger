
$(function() {
    $(".change-devour").on("click", function(event) {
      

      var id = $(this).data("id");
      var devouredState = {
          devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          location.reload();
      });
    });

    $(".create-form").on("submit", function(event) {
       
         
        var newBurger = {
            burger_name: $("newburger").val().trim(),
            devoured: $("[newburger=devoured]:true").val().trim()
            
        };
        $.ajax("/api/burgers", { // POST to /api/burgers
          type: "POST",
          data: newBurger      // with newBurger data
        }).then(function(response) {
          console.log(response)// <-- this will be the {id: result.insertId, message: "Success"} object. What is this for?
          console.log("Added new burger");
          // Reload the page to get the updated burger list.
          location.reload();
        });
      });
    });

  
    