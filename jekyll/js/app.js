---
---
$(function() {
  // init bootstrap popover & tooltip
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip()
  $('a[data-toggle="tooltip"]').on('click', function(e) {
    e.preventDefault();
  });
});
