$(document).ready(function(){
  var list = $('<ul class="modal_bar"></ul>');
  list.append('<li class="lst" id="html_tag">HTML/CSS</li>&nbsp');
  list.append('<li class="lst" id="javascript_tag">Javascript</li>&nbsp');
  list.append('<li class="lst" id="angular_tag">Angular</li>&nbsp');
  list.append('<li class="lst" id="node_tag">Node</li>&nbsp');
  list.append('<li class="lst" id="python">Python</li>&nbsp');
  list.append('<li class="lst" id="mongo">Mongo</li>&nbsp');
  list.append('<li class="lst" id="git_tag">Git</li>&nbsp');
  list.append('<li class="lst" id="ruby_tag">Ruby</li>&nbsp');
  list.append('<li class="lst" id="jquery_tag">Jquery</li>&nbsp');
  list.append('<li class="lst" id="sql_tag">SQL</li>&nbsp');
  list.append('<li class="lst" id="sublime_tag">Sublime</li>&nbsp');

  $('#html').on('click', function(event){
    event.preventDefault();

    var ul = $('<ul></ul>');
    var response_CSS1 = $.ajax({
      url:"https://www.kimonolabs.com/api/9cn5msz6?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        while (place < 19 ){
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results.collection1[place]["Link-Titles"].text;
          var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing);
          place++;
        };
      },
      error: function (xhr, status) {
      }
    });

    var response_CSS2 = $.ajax({
      url:"https://www.kimonolabs.com/api/6wrt9py8?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        while (place < 12 ){
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results.collection1[place]["Link-Titles"].text;
          var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing);
          place++;
        };
        ul.prepend(list);
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
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results['Lessons'][place]['Titles'].text;
          var a = $('<a class="link" href=' + response.results['Lessons'][place]['Titles'].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing)
          place++;
        };
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
          var linkListing = $('<li class="linkListing"></li>')
          var title = response.results['collection1'][0]['Tite'];
          linkListing.append(a)
          a.append(title + '<br>');
          ul.append(a);
        },
        error: function (xhr, status) {
        }
      });

      var response_3 = $.ajax({
        url:"https://www.kimonolabs.com/api/38uhdscy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0;
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Title-Links"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Title-Links"].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
        };
        ul.prepend(list);

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

$('#angular').on('click', function(event){
    var ul = $('<ul></ul>');
      var response_SA1 = $.ajax({
        url:"https://www.kimonolabs.com/api/38uhdscy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Link-Titles"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
        },
        error: function (xhr, status) {
          }
      });

      var response_SA2 = $.ajax({
        url:"https://www.kimonolabs.com/api/cy0kghuq?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          console.log(response)
          var place = 0;
          while (place < 18){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Link-Titles"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
          };
        ul.prepend(list);
            var myModal = new Modal({
              content: "" + $(ul).html(),
              maxWidth: 600,
           });
          myModal.open();
        },
        error: function (xhr, status) {
        }
        });
    })

  $('#cs').on('click', function(event){
    event.preventDefault();

    var ul = $('<ul></ul>')
    var response_CS = $.ajax({
        url:"https://www.kimonolabs.com/api/cmwe1bd0?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          var resources = $('<p></p>')
          while (place < 3){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection2'][place]['Lesson-Links'].text;
            var a = $('<a class="link" href=' + response.results['collection2'][place]['Lesson-Links'].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
          };
                  ul.prepend(list);

          var myModal = new Modal({
              content: "" + $(ul).html(),
              maxWidth: 600,
           });
          myModal.open();
        },
        error: function (xhr, status) {
        }
      })
    });


  $('#node').on('click', function(event){
    event.preventDefault();
    var ul = $('<ul></ul>')
    var response_SN1 = $.ajax({
        url:"https://www.kimonolabs.com/api/corprlpy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          var resources = $('<p></p>')
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection1'][place]['Link-Titles-1'].text
            var a = $('<a class="link" href=' + response.results['collection1'][place]['Link-Titles-1'].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);

            place++;
          };
          ul.prepend(list);
          var myModal = new Modal({
              content: "" + $(ul).html(),
              maxWidth: 600,
           });
          myModal.open();
        },
        error: function (xhr, status) {
        }
      })

     var response_SN2 = $.ajax({
        url:"https://www.kimonolabs.com/api/corprlpy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          var resources = $('<p></p>')
          while (place < 10){
            var text = response.results['collection1'][place]['Link-Titles-2'].text;
            var a = $('<a class="link" href=' + response.results['collection1'][place]['Link-Titles-2'].href + '>'  + text + '</a><br>')
            ul.append(a);
            place++;
          };
                  ul.prepend(list);

          var myModal = new Modal({
              content: "" + $(ul).html(),
              maxWidth: 600,
           });
          myModal.open();
        },
        error: function (xhr, status) {
        }
      })
    });


$('#python').on('click', function(event){
  event.preventDefault();
  var ul =$('<ul></ul>')
  var response_python = $.ajax({
    url:"https://www.kimonolabs.com/api/5z3f5btc?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      var place = 0
          var resources = $('<p></p>')
          while (place < 24){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection2'][place]['Link-Titles'].text;
            var a = $('<a class="link" href=' + response.results['collection2'][place]['Link-Titles'].href + '>'  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
                  ul.prepend(list);

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

$('#mongo').on('click', function(event){
  event.prepeventDefault();
  var ul =$('<ul></ul>')
  var response_python = $.ajax({
    url:"https://www.kimonolabs.com/api/a0oyohre?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      var place = 0
          while (place < 11){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection1'][place]['Title-Links'].text;
            var a = $('<a class="link" href=' + response.results['collection1'][place]['Title-Links'].href + " " + 'class="selection"> '  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
                  ul.prepend(list);

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

$("body").on("click", "a.link", function(event){
    event.preventDefault();
    window.open(this, "_blank")
  });

// $('.curriculum').on('click', function(e){
//   $('.main-container-2').animate({'marginLeft': '+=130px'}, 'slow');
// })

// $("body").on("click", "button.close-button", function(event){
//    $('.main-container-2').animate({'marginLeft': '-=130px'}, 'slow');
//  });


$("body").on("click", "li#node_tag", function(event){
    var ul = $('<ul></ul>')
    var response_SN1 = $.ajax({
        url:"https://www.kimonolabs.com/api/corprlpy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          var resources = $('<p></p>')
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection1'][place]['Link-Titles-1'].text
            var a = $('<a class="link" href=' + response.results['collection1'][place]['Link-Titles-1'].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);

            place++;
          };
          ul.prepend(list);
        $('.scotch-content').html(ul);
      },
      error: function (xhr, status) {
      }
    });
  });

$("body").on("click", "li#html_tag", function(event){
  event.preventDefault();

    var ul = $('<ul></ul>');
    var response_CSS1 = $.ajax({
      url:"https://www.kimonolabs.com/api/9cn5msz6?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        while (place < 19 ){
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results.collection1[place]["Link-Titles"].text;
          var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing);
          place++;
        };
      },
      error: function (xhr, status) {
      }
    });

    var response_CSS2 = $.ajax({
      url:"https://www.kimonolabs.com/api/6wrt9py8?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
      crossDomain: true,
      dataType: "jsonp",
      success: function (response) {
        var place = 0
        while (place < 12 ){
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results.collection1[place]["Link-Titles"].text;
          var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing);
          place++;
        };
        ul.prepend(list);
        $('.scotch-content').html(ul);
      },
      error: function (xhr, status) {
      }
      });
    });

$("body").on("click", "li#javascript_tag", function(event){
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
          var linkListing = $('<li class="linkListing"></li>')
          var text = response.results['Lessons'][place]['Titles'].text;
          var a = $('<a class="link" href=' + response.results['Lessons'][place]['Titles'].href + '>'  + text + '</a><br>')
          linkListing.append(a);
          ul.append(linkListing)
          place++;
        };
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
          var linkListing = $('<li class="linkListing"></li>')
          var title = response.results['collection1'][0]['Tite'];
          linkListing.append(a)
          a.append(title + '<br>');
          ul.append(a);
        },
        error: function (xhr, status) {
        }
      });

      var response_3 = $.ajax({
        url:"https://www.kimonolabs.com/api/38uhdscy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0;
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Title-Links"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Title-Links"].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
        };
          ul.prepend(list);
          $('.scotch-content').html(ul);
        },
        error: function (xhr, status) {
        }
      });
  });

$("body").on("click", "li#mongo", function(event){
  event.preventDefault();
  var ul =$('<ul></ul>')
  var response_python = $.ajax({
    url:"https://www.kimonolabs.com/api/a0oyohre?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      var place = 0
          while (place < 11){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection1'][place]['Title-Links'].text;
            var a = $('<a class="link" href=' + response.results['collection1'][place]['Title-Links'].href + " " + 'class="selection"> '  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
          ul.prepend(list);
          $('.scotch-content').html(ul);
    },
    error: function (xhr, status) {
    }
    });
  });

$("body").on("click", "li#python", function(event){
  event.preventDefault();
  var ul =$('<ul></ul>')
  var response_python = $.ajax({
    url:"https://www.kimonolabs.com/api/5z3f5btc?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
    crossDomain: true,
    dataType: "jsonp",
    success: function (response) {
      var place = 0
          var resources = $('<p></p>')
          while (place < 24){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection2'][place]['Link-Titles'].text;
            var a = $('<a class="link" href=' + response.results['collection2'][place]['Link-Titles'].href + '>'  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
          ul.prepend(list);
          $('.scotch-content').html(ul);
    },
    error: function (xhr, status) {
    }
    });
  });

$("body").on("click", "li#cs_tag", function(event){
    event.preventDefault();
    var ul = $('<ul></ul>')
    var response_CS = $.ajax({
        url:"https://www.kimonolabs.com/api/cmwe1bd0?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          var resources = $('<p></p>')
          while (place < 3){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results['collection2'][place]['Lesson-Links'].text;
            var a = $('<a class="link" href=' + response.results['collection2'][place]['Lesson-Links'].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
          };
            ul.prepend(list);
            $('.scotch-content').html(ul);
        },
        error: function (xhr, status) {
        }
      })
  });

$("body").on("click", "li#angular_tag", function(event){
  var ul = $('<ul></ul>');
      var response_SA1 = $.ajax({
        url:"https://www.kimonolabs.com/api/38uhdscy?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          var place = 0
          while (place < 19){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Link-Titles"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
            linkListing.append(a)
            ul.append(linkListing);
            place++;
          };
        },
        error: function (xhr, status) {
          }
      });

      var response_SA2 = $.ajax({
        url:"https://www.kimonolabs.com/api/cy0kghuq?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
        crossDomain: true,
        dataType: "jsonp",
        success: function (response) {
          console.log(response)
          var place = 0;
          while (place < 18){
            var linkListing = $('<li class="linkListing"></li>')
            var text = response.results.collection1[place]["Link-Titles"].text;
            var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
            linkListing.append(a);
            ul.append(linkListing);
            place++;
          };
          ul.prepend(list);
        $('.scotch-content').html(ul);

        },
        error: function (xhr, status) {

        }
        });
});




});

















