+ function($) {
  "use strict";

  var defaults;

  var show = function(params) {

    var mask = $("<div class='fui_mask fui_actions_mask'></div>").appendTo(document.body);

    var actions = params.actions || [];

    var actionsHtml = actions.map(function(d, i) {
      return '<div class="fui_actionsheet_cell ' + (d.className || "") + '">' + d.text + '</div>';
    }).join("");

    var titleHtml = "";

    if (params.title) {
      titleHtml = '<div class="fui_actionsheet_title">' + params.title + '</div>';
    }

    var tpl = '<div class="fui_actionsheet " id="fui_actionsheet">'+
                titleHtml +
                '<div class="fui_actionsheet_menu">'+
                actionsHtml +
                '</div>'+
                '<div class="fui_actionsheet_action">'+
                  '<div class="fui_actionsheet_cell fui_actionsheet_cancel">取消</div>'+
                  '</div>'+
                '</div>';
    var dialog = $(tpl).appendTo(document.body);

    dialog.find(".fui_actionsheet_menu .fui_actionsheet_cell, .fui_actionsheet_action .fui_actionsheet_cell").each(function(i, e) {
      $(e).click(function() {
        $.closeActions();
        params.onClose && params.onClose();
        if(actions[i] && actions[i].onClick) {
          actions[i].onClick();
        }
      })
    });

    mask.show();
    dialog.show();
    mask.addClass("fui_mask_visible");
    dialog.addClass("fui_actionsheet_toggle");
  };

  var hide = function() {
    $(".fui_mask").removeClass("fui_mask_visible").transitionEnd(function() {
      $(this).remove();
    });
    $(".fui_actionsheet").removeClass("fui_actionsheet_toggle").transitionEnd(function() {
      $(this).remove();
    });
  }

  $.actions = function(params) {
    params = $.extend({}, defaults, params);
    show(params);
  }

  $.closeActions = function() {
    hide();
  }

  $(document).on("click", ".fui_actions_mask", function() {
    $.closeActions();
  });

  var defaults = $.actions.prototype.defaults = {
    title: undefined,
    onClose: undefined,
    /*actions: [{
      text: "菜单",
      className: "color-danger",
      onClick: function() {
        console.log(1);
      }
    },{
      text: "菜单2",
      className: "color-success",
      onClick: function() {
        console.log(2);
      }
    }]*/
  }

}($);
