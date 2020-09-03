$(document).ready(function () {
    /// check for the weather application, I need to grab the entire form on submit...???  the new creation of the burger
    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        const newBurger = {
            burgerName: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };



        // /I need move that burger into an object, with its name and if it was eaten or devoured??? naming
        // I need to post that to the db, in an ajax call 
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    //I need a neww naming structure in the html .....?  too many btn.s

    $(".btnD").on("click", function (event) {
        const id = $(this).data("id");
        const newStage = {
            devoured: true
        }

        // then I need the put routing using ajax to a new devoured status, 
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStage
        }).then(
            function () {
                // console.log("changed stage to", newStage);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".btn").on("click", function (e) {
        // e.preventDefault();


        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        })

    })

});

//I am adding the delete back into the program even thought it doesn't aske for it in the readme.  



//const pastSch = $("<button>").appendTo('#searchHistory');
// const pastS = $('<button>')
// pastS.addClass('thePast')
// pastS.text(response.name)
// $('#searchHistory').append(pastS)