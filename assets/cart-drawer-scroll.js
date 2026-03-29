document.addEventListener("DOMContentLoaded", function() {
  var isMouseDown = false;
  var startX, scrollLeft;

  var listElement = document.querySelector(".cart-horizontal .cart-recommendations .list-unstyled");

  listElement.addEventListener("mousedown", function(e) {
      isMouseDown = true;
      startX = e.pageX - listElement.offsetLeft;
      scrollLeft = listElement.scrollLeft;
  });

  listElement.addEventListener("mouseleave", function() {
      if (isMouseDown) {
          isMouseDown = false;
      }
  });

  listElement.addEventListener("mouseup", function() {
      if (isMouseDown) {
          isMouseDown = false;
      }
  });

  listElement.addEventListener("mousemove", function(e) {
      if (!isMouseDown) return;
      e.preventDefault();
      var x = e.pageX - listElement.offsetLeft;
      var walk = (x - startX) * 2;

      listElement.scrollLeft = scrollLeft - walk;
  });
});