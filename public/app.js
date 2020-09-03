$(document).ready(function () {

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devour]:checked").val()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();

            }
        );
    });

    $(".btnD").on("click", function (e) {
        // e.preventDefault();


        const id = $(this).data("id");
        const newDevourStatus = {
            devoured: true
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourStatus
        }).then(function () {
            location.reload();
        })

    })
    $(".btn").on("click", function (e) {
        // e.preventDefault();


        const id = $(this).data("id");

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