const bodyBefore = document.querySelector('body::before');

document.addEventListener('mousemove', function(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const bgPosX = (mouseX / window.innerWidth) * 100;
  const bgPosY = (mouseY / window.innerHeight) * 100;

  bodyBefore.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});
