$(document).ready(function(){
  var userId
  CineIOPeer.init('9cd3947bc9fba6aa761c4edf5b795dc6');
  var request = $.ajax({
    url: '/users/signature',
    type: 'get',
    dataType: 'json'
  });
  request.done(function(serverData) {
    CineIOPeer.identify(serverData.identity, serverData.timestamp, serverData.signature);
    userId = serverData.signature
  });
  $('.start_video').on('click', function(event){
    event.preventDefault();
    CineIOPeer.startCameraAndMicrophone();

    CineIOPeer.call(userId);
    CineIOPeer.on('call-placed', function(data) {
      // CineIOPeer.join(data.call.room);
      var call = data.call;
      CineIOPeer.sendDataToAll(data);

      $('.video-screen').append(data.videoElement);
    });
  });
  CineIOPeer.on('call', function(data) {
    var call = data.call;
    call.answer();
    CineIOPeer.sendDataToAll(data);
  $('.video-screen').append(data.videoElement);
  });
})


