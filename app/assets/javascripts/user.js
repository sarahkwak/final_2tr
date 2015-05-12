$(document).ready(function(){
  CineIOPeer.init('9cd3947bc9fba6aa761c4edf5b795dc6');
  var request = $.ajax({
    url: '/users/signature',
    type: 'get',
    dataType: 'json'
  });
  request.done(function(serverData) {
    if (serverData !== null) {
      CineIOPeer.identify(serverData.identity, serverData.timestamp, serverData.signature);
    }
  });
  request.fail(function(serverData) {
    alert("Please log in first to use this feature")
  });
  $('.start_video').on('click', function(event){
    event.preventDefault();
    var callId = $(this).attr('id')
    CineIOPeer.call(callId);
    CineIOPeer.on('call-placed', function(data) {
      CineIOPeer.startCameraAndMicrophone();
      window.open('/video')
      CineIOPeer.on('media-added', function(videoData) {
        $('.video-screen').append(videoData.videoElement);
      });
    });
  });
  CineIOPeer.on('call', function(data) {
    var call = data.call;
    CineIOPeer.startCameraAndMicrophone();
    CineIOPeer.on('media-added', function(videoData) {
      call.answer();
      window.open('/video')
      $('.video-screen').append(videoData.videoElement);
    })
  });
})


