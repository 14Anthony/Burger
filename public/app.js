$(document).ready(function () {
    /// check for the weather application, I need to grab the entire form on submit...???  the new creation of the burger
    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        const newBurger = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=devoured]:checked").val().trim()
        };


        ///I need move that burger into an object, with its name and if it was eaten or devoured??? naming
        //I need to post that to the db, in an ajax call 
        // Send the POST request.
        //      $.ajax("/api/cats", {
        //         type: "POST",
        //         data: newCat
        //       }).then(
        //         function() {
        //           console.log("created new cat");
        //           // Reload the page to get the updated list
        //           location.reload();
        //         }
        //       );
        //     });
        //   });
        // I need to create a button and  place it and the burger information on the page on the page.
        // then I need the put routing using ajax to a new devoured status
        // Send the PUT request.
        // $.ajax("/api/cats/" + id, {
        //     type: "PUT",
        //     data: newSleepState
        //   }).then(
        //     function() {
        //       console.log("changed sleep to", newSleep);
        //       // Reload the page to get the updated list
        //       location.reload();
        //     }
        //   );
        // });
        //I need to be able to delet the data and reload everything clean.


    })