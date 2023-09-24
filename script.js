// cursor dot
const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

});


// 'about' header changes opacity when mouse hovers over it
const aboutLink = document.getElementById("about");
// when mouse hovers over it, opacity goes to 0.8
aboutLink.addEventListener("mouseover", () => {
  aboutLink.style.opacity = "0.8";
});
// when the mouse leaves, opacity resets to 1 (opaque)
aboutLink.addEventListener("mouseout", () => {
  aboutLink.style.opacity = "1";
});
