$(document).ready(function() {
  $('.review-button').on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    var reviewModal = new Modal({
      content:
      '<form class="new-review"><input type="text" name="content" placeholder="content" ><input type="text" name="rating" placeholder="rating from 1 to 5" ><input type="submit" value="New review" ></form>',
      maxWidth: 600
    });
    reviewModal.open();
    $('.new-review').on('submit', function(event) {
      event.preventDefault();
      reviewModal.close();
      var request = $.ajax({
        url: '/users/' + id + '/reviews',
        type: 'post',
        data: $('.new-review').serialize()
      });
      request.done(function(serverData) {
        var template = Handlebars.compile($('#review-template').html());
        $('.review-container').append(template(serverData));
        var numStars = serverData.rating;
        var stars = " "
        for(var i=0; i < numStars; i++) {
          stars += '⭐'
        }
        $('.review-container').children().last().find('p').last().text('Rating:' + stars);
      });
      request.fail(function(serverData) {
        console.log('Something went wrong');
      });
    });
  });
});
