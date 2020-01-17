(function() {
  // document.querySelector('.page').addEventListener("mousewheel", (e) => {
  //   e = window.event || e;
  //   const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  //   document.querySelector('.page').scrollLeft -= (delta * 50); // Multiplied by 40
  //   e.preventDefault();
  // });

  let position = 0;
  let speed = 40;
  const viewport = document.querySelector('.page__viewport');
  const w = viewport.offsetWidth;
  const items = document.querySelectorAll('.item');
  viewport.style.width = `${w*items.length}`;
  window.addEventListener('wheel', function (e) {
    if (scroll) {
      if (e.deltaY < 0) {
        // 'scroll up'
        position -= speed;
        viewport.style.transform = `translateX(-${position}px)`;
        if (position < 0) {
          position = 0;
        }
      }
      if (e.deltaY > 0) {
        // 'scroll down'
        position += speed;
        viewport.style.transform = `translateX(-${position}px)`;
      }
    }
  });
})();