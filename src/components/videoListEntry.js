angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      item: '<',
      onClick:'<'
    },

  
    templateUrl: 'src/templates/videoListEntry.html'
  }); 
 