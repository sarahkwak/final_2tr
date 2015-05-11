$(document).ready(function() {
  $('#git').on("click", function(evt) {
    evt.preventDefault();
    console.log("im from ajax")
    $.ajax({
      url: '/curriculums/git',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 6){
        var course = $('<a href=' + response.url +'>' + response[i].title + '</a><br>')
        ul.append(course);
        i++;
      }
      var myModal = new Modal({
            content: "" + $(ul).html(),
            maxWidth: 600,
          });
        myModal.open();
    })
    .fail(function(response) {
      console.log("error")
    })
  }) //click event

   $('#ruby').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/ruby',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 16){
        var course = $('<a href=' + response.url +'>' + response[i].title + '</a><br>')
        ul.append(course);
        i++;
      }
      var myModal = new Modal({
            content: "" + $(ul).html(),
            maxWidth: 600,
          });
        myModal.open();
    })
    .fail(function(response) {
      console.log("error")
    })
  })

    $('#jquery').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/jquery',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 8){
        var course = $('<a href=' + response.url +'>' + response[i].title + '</a><br>')
        ul.append(course);
        i++;
      }
      var myModal = new Modal({
            content: "" + $(ul).html(),
            maxWidth: 600,
          });
        myModal.open();
    })
    .fail(function(response) {
      console.log("error")
    })
  })

     $('#sql').on("click", function(evt) {
    evt.preventDefault();
    console.log("im from ajax")
    $.ajax({
      url: '/curriculums/sql',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 3){
        var course = $('<a href=' + response.url +'>' + response[i].title + '</a><br>')
        ul.append(course);
        i++;
      }
      var myModal = new Modal({
            content: "" + $(ul).html(),
            maxWidth: 600,
          });
        myModal.open();
    })
    .fail(function(response) {
      console.log("error")
    })
  })

}) // ready