window.addEventListener('load', function() {
  const loadingBar = document.querySelector('.loading-bar');
  let progress = 0;
  
  const intervalId = setInterval(function() {
    progress += Math.random() * 40;
    if (progress >= 100) {
      clearInterval(intervalId);
      loadingBar.style.width = '100%';
      const loadingScreen = document.querySelector('.loading-screen');
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;
      const remaining = Math.max(0, 1500 - elapsed);
      setTimeout(function() {
        loadingScreen.style.opacity = 0;
        setTimeout(function() {
          loadingScreen.style.display = 'none';
        }, 1000);
      }, remaining);
    } else {
      loadingBar.style.width = progress + '%';
    }
  }, 200);
  
  const startTime = new Date().getTime();
});