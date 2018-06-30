angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      item: '<',
      select:'<'
    },

  
    templateUrl: 'src/templates/videoListEntry.html'
  }); 
 