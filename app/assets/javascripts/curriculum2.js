$(document).ready(function() {
      var list = $('<ul></ul>');

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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
        i++;
      }
      ul.prepend(list);
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
      ul.prepend(list);
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
        ul.prepend(list);
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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
        i++;
      }
      ul.prepend(list);
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
      ul.prepend(list);
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

$("body").on("click", "li#git_tag", function(event){
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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
        i++;
      }
      ul.prepend(list);
      $('.scotch-content').html(ul);
    })
    .fail(function(response) {
      console.log("error")
    })
});

$("body").on("click", "li#ruby_tag", function(event){
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
      ul.prepend(list);
      $('.scotch-content').html(ul);
    })
    .fail(function(response) {
      console.log("error")
    })
});

$("body").on("click", "li#sql_tag", function(event){
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
        var linkListing = $('<li class="linkListing"></li>')
        var course = $('<a class="link" href=' + response[i].url +'>' + response[i].title + '</a>')
        linkListing.append(course);
        ul.append(linkListing);
        i++;
      }
      ul.prepend(list);
      $('.scotch-content').html(ul);
    })
    .fail(function(response) {
      console.log("error")
    })
});

$("body").on("click", "li#jquery_tag", function(event){
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
        ul.prepend(list);
        $('.scotch-content').html(ul);
      })
      .fail(function(response) {
        console.log("error")
      })
});

$("body").on("click", "li#sublime_tag", function(event){
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
      ul.prepend(list);
    $('.scotch-content').html(ul);
    })
    .fail(function(response) {
      console.log("error")
    })
});















}) // ready