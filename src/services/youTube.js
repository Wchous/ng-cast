angular.module('video-player')
  .service('youTube', function($http){
    $http.get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=5`, {
      params: {
        part: 'snippet',
        q: query,
        maxResults: 5 ,
        key: window.YOUTUBE_API_KEY 
      }
    }).then(console.log('we are awesome'));
  });
