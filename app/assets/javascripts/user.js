$(document).ready(function(){

  $('.start_video').on('click', function(event){
  event.preventDefault();

  CineIOPeer.init('9cd3947bc9fba6aa761c4edf5b795dc6');
  CineIOPeer.startCameraAndMicrophone();

    CineIOPeer.on('media-added', function(data){
    var room = "the-best-room-ever";
    CineIOPeer.join(room);
    var peers = $('.peers');
    peers.append(data.videoElement);
    });
  })
})

