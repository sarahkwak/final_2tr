$(document).ready(function() {
  $('.postcode').on("click", function() {
    console.log("hello from ajax on postcode click")
    $('.tutor-main form').css("visibility", "hidden");
    $('#map-canvas').css("visibility", "visible");
  }); // postcode click function

  google.maps.event.addDomListener(window, 'load', initialize);
});//ready