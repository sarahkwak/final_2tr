$(document).ready(function(){
  $('.signup').on('click', function(event){
    event.preventDefault();
    $('.signup-render').toggle()
  });

  $('.login').on('click', function(event){
    event.preventDefault();
    $('.login-render').toggle()
  });

  $('.tutor_button').on('click', function(event){
    event.preventDefault();
    $('.tutor-render').toggle()
  });
})