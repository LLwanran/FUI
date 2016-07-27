+ function($) {
  "use strict";

  var timeout;

  $.toptip = function(text, duration, type) {
    if(!text) return;
    if(typeof duration === typeof "a") {
      type = duration;
      duration = undefined;
    }
    duration = duration || 3000;
    var className = type ? 'bg-' + type : 'bg-danger';
    var $t = $('.fui_toptips').remove();
    $t = $('<div class="fui_toptips"></div>').appendTo(document.body);
    $t.html(text);
    $t[0].className = 'fui_toptips ' + className

    clearTimeout(timeout);

    if(!$t.hasClass('fui_toptips_visible')) {
      $t.show().width();
      $t.addClass('fui_toptips_visible');
    }

    timeout = setTimeout(function() {
      $t.removeClass('fui_toptips_visible').transitionEnd(function() {
        $t.remove();
      });
    }, duration);
  }
}($);