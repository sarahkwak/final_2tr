$(document).ready(function() {

  $('#git').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/git',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')

      while (i < 6){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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
    $.ajax({
      url: '/curriculums/sql',
      type: 'GET'
    })
    .done(function(response) {
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 3){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#sublime').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/subl',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#fundamentals').on("click", function(evt) {
    evt.preventDefault();
      console.log("im from fundamentals")
    $.ajax({
      url: '/curriculums/fundamentals',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#css').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/css',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#html').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/html',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#javascript').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/javascript',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

$('#heroku').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/heroku',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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


  $('#mongo').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/mongo',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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

  $('#python').on("click", function(evt) {
    evt.preventDefault();
    $.ajax({
      url: '/curriculums/python',
      type: 'GET'
    })
    .done(function(response) {
      console.log(response)
      var ul = $('<ul></ul>');
      var i = 0
      var resources = $('<p></p>')
      while (i < 4){
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class= "link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
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