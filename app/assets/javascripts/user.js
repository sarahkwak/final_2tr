$(document).ready(function(){
  CineIOPeer.init('9cd3947bc9fba6aa761c4edf5b795dc6');
    var request = $.ajax({
      url: '/users/signature',
      type: 'get',
      dataType: 'json'
    });
    request.done(function(serverData) {
      CineIOPeer.identify(serverData.identity, serverData.timestamp, serverData.signature);
    });
  $('.start_video').on('click', function(event){
    event.preventDefault();
    CineIOPeer.call(2);
    CineIOPeer.on('call-placed', function(data) {
      CineIOPeer.startCameraAndMicrophone();
      CineIOPeer.on('media-added', function(videoData) {
        $('.video-screen').append(videoData.videoElement);
      });
    });
  });
  CineIOPeer.on('call', function(data) {
    CineIOPeer.startCameraAndMicrophone();
    var call = data.call;
    CineIOPeer.on('media-added', function(videoData) {
      call.answer();
      $('.video-screen').append(videoData.videoElement);
    })
  });
})


