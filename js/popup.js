/*======================================================
************   Picker   ************
======================================================*/
+ function($) {
  "use strict";

  //Popup 和 picker 之类的不要共用一个弹出方法，因为这样会导致 在 popup 中再弹出 picker 的时候会有问题。

  $.openPopup = function(popup, className) {

    $.closePopup();

    popup = $(popup);
    popup.show();
    popup.width();
    popup.addClass("fui-popup-container-visible");
    var modal = popup.find(".fui-popup-modal");
    modal.width();
    modal.transitionEnd(function() {
      modal.trigger("open");
    });
  }


  $.closePopup = function(container, remove) {
    container = $(container || ".fui-popup-container-visible");
    container.find('.fui-popup-modal').transitionEnd(function() {
      var $this = $(this);
      $this.trigger("close");
      container.hide();
      remove && container.remove();
    })
    container.removeClass("fui-popup-container-visible")
  };


  $(document).on("click", ".close-popup, .fui-popup-overlay", function() {
    $.closePopup();
  })
  .on("click", ".open-popup", function() {
    $($(this).data("target")).popup();
  })
  .on("click", ".fui-popup-container", function(e) {
    if($(e.target).hasClass("fui-popup-container")) $.closePopup();
  })

  $.fn.popup = function() {
    return this.each(function() {
      $.openPopup(this);
    });
  };

}($);