$(document).ready(function() {
  $('.new_question').on('submit', function(event) {
    event.preventDefault();
    var request = $.ajax({
      url: $(this).attr('href'),
      type: 'post',
      data: $(this).serialize(),
    });
    request.done(function(data) {
      var template = Handlebars.compile($('#question-template').html());
      $('.questions-container').append(template(data));
      $('.new_question').trigger('reset');
    });
    request.fail(function(data) {
      alert('Something went wrong. Error:' + data);
    });
  });
  $('.questions-container').on('click', '.show-answers', function(event) {
    event.preventDefault();
    var button = $(this)
    var request = $.ajax({
      url: '/questions/' + button.parent().attr('id') + '/answers',
      type: 'get'
    });
    request.done(function(data) {
      var template = Handlebars.compile($('#answer-template').html());
      for(var i in data) {
        button.parent().append(template(data[i]));
      };
      button.hide();
    });
    request.fail(function(data) {
      alert('Something went wrong. Error:' + data);
    });
  });
  $('.questions-container').on('click', '.new-answer', function(event) {
    event.preventDefault();
    var container = $(this).parent();
    $('.form-container').appendTo(container).show();
    $('.new-answer-form').on('submit', function(formEvent) {
      formEvent.preventDefault();
      var form = $(this)
      var request = $.ajax({
        url: '/questions/' + container.attr('id') + '/answers',
        type: 'post',
        data: form.serialize()
      });
      request.done(function(data) {
        var template = Handlebars.compile($('#answer-template').html());
        container.append(template(data));
        form.trigger('reset');
      });
      request.fail(function(data) {
        alert('Something went wrong. Error:' + data);
      });
    });
  });
});
