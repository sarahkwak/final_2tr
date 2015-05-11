$(document).ready(function(){

  $('#html').on('click', function(event){
    event.preventDefault();
    var ul = $('<ul></ul>');

    var response = $.ajax({
      url:"https://www.kimonolabs.com/api/a5ezu2ju?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        var resources = $('<p></p>')
        while (place < 6){
          var text = response.results['collection2'][place]['Lesson-Links'];
          ul.append(text+'<br>');
          place++;
        };
        var myModal = new Modal({
          content: "" + $(ul).html(),
          maxWidth: 600,
          });
        myModal.open();
      },
      error: function (xhr, status) {
        }
      });
    });

  $('#javascript').on('click', function(event){
    event.preventDefault();

    var ul = $('<ul></ul>');
    var response_1 = $.ajax({
      url:"https://www.kimonolabs.com/api/cedzysr2?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        var resources = $('<p></p>')
        while (place < 6){
          var text = response.results['Lessons'][place]['Titles'].text;
          console.log(text)
          var a = $('<a href=' + response.results['Lessons'][place]['Titles'].href + '>'  + text + '</a><br>')
          ul.append(a);
          place++;
        }

        var myModal = new Modal({
            content: "" + $(ul).html(),
            maxWidth: 600,
          });
        myModal.open();

      },
      error: function (xhr, status) {
        }
      });

    var a = $('<a></a>');
     var response_2 = $.ajax({
        url:"https://www.kimonolabs.com/api/ejdzdt98?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var title = response.results['collection1'][0]['Tite'];
          a.append(title + '<br>');
          ul.append(a);
        },
        error: function (xhr, status) {
        }
      });
    });



$('#cs').on('click', function(event){
    event.preventDefault();


  var response = $.ajax({
      url:"https://www.kimonolabs.com/api/cmwe1bd0?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        //Do something with the response
        console.log(response);
        var place = 0
        var resources = $('<p></p>')
          var u = $('<ul></ul>')
        while (place < 3){
          var text = response.results['collection2'][place]['Lesson-Links'].text;
          var a = $('<a href=' + response.results['collection2'][place]['Lesson-Links'].href + '>'  + text + '</a><br>')

          u.append(a);
          place++;
        }

        var myModal = new Modal({
            content: "" + $(u).html(),
            maxWidth: 600,
          });
        myModal.open();

      },
      error: function (xhr, status) {
        //handle errors
      }
    });
  });
});
