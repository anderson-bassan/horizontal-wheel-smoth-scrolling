    <script>
      // Add event listener for mouse wheel
      window.addEventListener("wheel", function(event) {
        // Prevent vertical scrolling
        event.preventDefault();

        // Get the current scroll position
        var currentScroll = window.pageXOffset;

        // Calculate the new scroll position based on the mouse wheel event delta
        var newScroll = currentScroll + event.deltaY * 10;

        // Use the smooth scroll function to smoothly scroll to the new position
        smoothScroll(window, currentScroll, newScroll, 1000, easeInOutQuad);
      }, {passive: false});

      // Smooth scroll function
      function smoothScroll(element, start, end, duration, easingFn) {
        var startTime = Date.now();
        var endTime = startTime + duration;
        var currentTime;
        var time;
        var ease;

        function animateScroll() {
          currentTime = Date.now();
          time = currentTime - startTime;
          ease = easingFn(time / duration);
          element.scroll(start + ease * (end - start), 0);
          if (currentTime < endTime) {
            requestAnimationFrame(animateScroll);
          }
        }
        animateScroll();
      }
      
      // Easing function
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
    </script>
