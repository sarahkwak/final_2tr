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
      var request = $.ajax({
        url: '/users/' + id + '/reviews',
        type: 'post',
        data: $('.new-review').serialize()
      });
      request.done(function(serverData) {
        reviewModal.close();
      });
      request.fail(function(serverData) {
        console.log('Something went wrong');
      });
    });
  });
});
