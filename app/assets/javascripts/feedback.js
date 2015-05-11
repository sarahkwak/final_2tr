$(document).ready(function() {
  $('.review').on('click', function(event) {
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
        var clone = $('.review-container').find('div').first().clone();
        clone.find('p').first().text('Review: ' + serverData.content);
        clone.find('p').last().text('Review Rating: ' + serverData.rating);
        $('.review-container').append(clone)
      });
      request.fail(function(serverData) {
        console.log('Something went wrong');
      });
    });
  });
});
