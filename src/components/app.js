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
        console.log(this)
        this.nowplaying = video
      }
      
      this.nowplaying = this.videos[0]
      this.selectVideo = this.selectVideo.bind(this)
      //   let spliced = window.exampleVideoData.filter(function(elem){
      //     if(elem.snippet.title === $event){
      //       return elem
      //     }
      //   })
      //   this.videos.splice(indexOf(spliced))
      //   this.videos.unshift(spliced)
      // }
     
        console.log('clicked');
    }
  });


