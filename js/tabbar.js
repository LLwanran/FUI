/* global $:true */
+function ($) {
  "use strict";

  var ITEM_ON = "fui_bar_item_on";

  var showTab = function(a) {
    var $a = $(a);
    if($a.hasClass(ITEM_ON)) return;
    var href = $a.attr("href");

    if(!/^#/.test(href)) return ;

    $a.parent().find("."+ITEM_ON).removeClass(ITEM_ON);
    $a.addClass(ITEM_ON);

    var bd = $a.parents(".fui_tab").find(".fui_tab_bd");

    bd.find(".fui_tab_bd_item_active").removeClass("fui_tab_bd_item_active");

    $(href).addClass("fui_tab_bd_item_active");
  }

  $.showTab = showTab;

  $(document).on("click", ".fui_tabbar_item, .fui_navbar_item", function(e) {
    var $a = $(e.currentTarget);
    var href = $a.attr("href");
    if($a.hasClass(ITEM_ON)) return;
    if(!/^#/.test(href)) return;

    e.preventDefault();

    showTab($a);
  });

}($);