
document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";

window.addEventListener('load', function() {
  const loadingBar = document.querySelector('.loading-bar');
  let progress = 0;


  const intervalId = setInterval(function() {
    progress += Math.random() * 200;
    if (progress >= 100) {
      clearInterval(intervalId);
      loadingBar.style.width = '100%';
      const loadingScreen = document.querySelector('.loading-screen');
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;
      const remaining = Math.max(0, 800 - elapsed);
      setTimeout(function() {
        loadingScreen.style.opacity = 0;
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
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


window.addEventListener("scroll", function() {
  // Get the current scroll position
  let scrollPosition = window.scrollY;

  // Calculate the opacity of the background color based on the scroll position
  let opacity = Math.max(1 - (scrollPosition / 1000), 0.6);

  document.body.style.setProperty("--background-opacity", opacity);
  // document.body.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
});

