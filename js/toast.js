+ function($) {
  "use strict";

  var defaults;

  var show = function(html, className) {

    className = className || "";
    var mask = $("<div class='fui_mask_transparent'></div>").appendTo(document.body);

    var tpl = '<div class="fui_toast ' + className + '">' + html + '</div>';
    var dialog = $(tpl).appendTo(document.body);

    dialog.show();
    dialog.addClass("fui_toast_visible");
  };

  var hide = function(callback) {
    $(".fui_mask_transparent").remove();
    $(".fui_toast_visible").removeClass("fui_toast_visible").transitionEnd(function() {
      var $this = $(this);
      $this.remove();
      callback && callback($this);
    });
  }

  $.toast = function(text, style, callback) {
    if(typeof style === "function") {
      callback = style;
    }
    var className;
    if(style == "cancel") {
      className = "fui_toast_cancel";
    } else if(style == "forbidden") {
      className = "fui_toast_forbidden";
    } else if(style == "text") {
      className = "fui_toast_text";
    }
    show('<i class="fui_icon_toast"></i><p class="fui_toast_content">' + (text || "已经完成") + '</p>', className);

    setTimeout(function() {
      hide(callback);
    }, toastDefaults.duration);
  }

  $.showLoading = function(text) {
    var html = '<div class="fui_loading">';
    for(var i=0;i<12;i++) {
      html += '<div class="fui_loading_leaf fui_loading_leaf_' + i + '"></div>';
    }
    html += '</div>';
    html += '<p class="fui_toast_content">' + (text || "数据加载中") + '</p>';
    show(html, 'fui_loading_toast');
  }

  $.hideLoading = function() {
    hide();
  }

  var toastDefaults = $.toast.prototype.defaults = {
    duration: 2000
  }

}($);