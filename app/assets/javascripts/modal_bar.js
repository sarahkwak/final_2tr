// $(document).ready(function(){
//   var list = $('<ul></ul>');
//   list.append('<li id="html_tag">html</li>');
//   list.append('<li id="javascript_tag">javascript</li>');
//   list.append('<li id="angular_tag">angular</li>');
//   list.append('<li id="node_tag">node</li>');
//   list.append('<li id="python">python</li>');
//   list.append('<li id="mongo">mongo</li>');
// $("body").on("click", "li#node_tag", function(event){
//   console.log(this)
//     event.preventDefault();
//     var ulist = $('<ul></ul>');
//     var response_CSS1 = $.ajax({
//       url:"https://www.kimonolabs.com/api/9cn5msz6?apikey=KqO43CQBHYvoDMtlWkXYeXMAa2K0or2M",
//       crossDomain: true,
//       dataType: "jsonp",
//       success: function (response) {
//         var place = 0
//         while (place < 19 ){
//           var linkListing = $('<li class="linkListing"></li>')
//           var text = response.results.collection1[place]["Link-Titles"].text;
//           var a = $('<a class="link" href=' + response.results.collection1[place]["Link-Titles"].href + '>'  + text + '</a><br>')
//           linkListing.append(a);
//           ulist.append(linkListing);
//           place++;
//         };
//         ulist.prepend(list);
//         $('.scotch-content').html(ulist);
//       },
//       error: function (xhr, status) {
//       }
//     });
//   });
// });