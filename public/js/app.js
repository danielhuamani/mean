$(function() {
  $(".navbar-expand-toggle").click(function() {
    $(".app-container").toggleClass("expanded");
    return $(".navbar-expand-toggle").toggleClass("fa-rotate-90");
  });
  return $(".navbar-right-expand-toggle").click(function() {
    $(".navbar-right").toggleClass("expanded");
    return $(".navbar-right-expand-toggle").toggleClass("fa-rotate-90");
  });
});

$(function() {
  if($('select').length>0) {

    return $('select').select2();
    }

});

$(function() {
  if($('.toggle-checkbox').length>0) {

    return $('.toggle-checkbox').bootstrapSwitch({
      size: "small"
    });
  }
});

$(function() {
  if($('.match-height').length>0) {

    return $('.match-height').matchHeight();
  }
});

$(function() {
  if($('.datatable').length>0) {
    return $('.datatable').DataTable({
      "dom": '<"top"fl<"clear">>rt<"bottom"ip<"clear">>'
    });

  }
});

$(function() {
  return $(".side-menu .nav .dropdown").on('show.bs.collapse', function() {
    return $(".side-menu .nav .dropdown .collapse").collapse('hide');
  });
});
