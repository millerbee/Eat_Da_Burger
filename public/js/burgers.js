
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState= {
        devoured: newDevour
      };
  
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
      }).then(
          function() {
              console.log("changed devoured to", newDevour);
              location.reload();
          }
      );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("bn").val().trim(),
            devoured: $("[bn=devoured]:checked").val().trim()
        };
            // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
    