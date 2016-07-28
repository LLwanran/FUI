+ function($) {
  "use strict";

  $(document).on("click", ".fui_search_bar label", function(e) {
    $(e.target).parents(".fui_search_bar").addClass("fui_search_focusing");
  })
  .on("blur", ".fui_search_input", function(e) {
    var $input = $(e.target);
    if(!$input.val()) $input.parents(".fui_search_bar").removeClass("fui_search_focusing");
  })
  .on("click", ".fui_search_cancel", function(e) {
    var $input = $(e.target).parents(".fui_search_bar").removeClass("fui_search_focusing").find(".fui_search_input").val("").blur();
  })
  .on("click", ".fui_icon_clear", function(e) {
    var $input = $(e.target).parents(".fui_search_bar").find(".fui_search_input").val("").focus();
  });

}($);