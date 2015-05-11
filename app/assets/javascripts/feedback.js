$(document).ready(function() {
  $('.review').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).parent().attr('id'),

    })
  });
});
