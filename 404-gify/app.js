let container = document.getElementsByClassName("container")[0];
// console.log(container);
window.onmousemove = function (event) {
  var x = - event.clientX / 5,
    y = event.clientY / 5;
  container.style.backgroundPositionX = x + 'px';
  container.style.backgroundPositionY = y + 'px';
};
