$(document).ready(function(){

  $("body").on("mouseover", ".linkListing", function(event) {
    event.preventDefault();
    console.log(this)
    $(this).animate(
      {$(this).css("background": "blue"}, 1000);
        }).mouseout(function() {
          $(this).animate(
            {backgroundColor: "rgba(217, 101, 76, .2)" }, 500);
          })
        });
