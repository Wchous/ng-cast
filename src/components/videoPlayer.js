angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      played: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function() {
      this.createURL = function(videoId) {
        console.log(videoId);
        return "https://www.youtube.com/embed/" + videoId;
      };
      console.log('The videoPlayer controller function is working');
    }
  });
 
