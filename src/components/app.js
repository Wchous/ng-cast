var app = angular.module('video-player', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**'
    ]);
  })
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function() {
      
      this.videos = window.exampleVideoData;
      
      this.selectVideo = function(video){
        console.log(this);
        this.nowplaying = video;
      };
      
      this.nowplaying = this.videos[0];
      this.selectVideo = this.selectVideo.bind(this);
      
      // youTube
      // this.searchResults = function(query){
      //   var context = this
      //   youTube.search(query, function(response){context.videos = response.data.items; context.selectVideo(context.videos[0])})
        
        
      // }
      
      // youTube(query, (res) => {
      //   console.log(res)
      // })
    
    }
  });