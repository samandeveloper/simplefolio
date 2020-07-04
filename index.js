import initTilt from './src/js/tilt';
import initSr from './src/js/sr';

import './src/style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('https://cdnjs.cloudflare.com'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
