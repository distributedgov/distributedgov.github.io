(function ($) {
  $('.guide-txt h2, .guide-txt h3').each(function () {
    if ($(this).attr("id") !== undefined) {
      $(this).append('<a class="header-link" href="#' + $(this).attr("id") + '" title="Permalink"><span class="sr-only">Permalink</span><i class="fa fa-link"></i></a>');
    }
  });
}(jQuery));
