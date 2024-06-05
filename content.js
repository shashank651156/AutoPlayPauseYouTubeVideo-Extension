document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      pauseVideos();
    } else if (document.visibilityState === 'visible') {
      playVideos();
    }
  });
  
  function pauseVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
    });
  }
  
  function playVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play();
    });
  }
  