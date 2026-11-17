$(function () {
  const panel = $('#event-panel');
  panel.on('mousemove', function (event) {
    $('#message').text('x=' + event.pageX + ' · y=' + event.pageY);
  }).on('mouseleave', function () {
    $('#message').text('goodbye!');
  }).on('click', function () {
    $('#message').text('stopped move reporting');
    panel.off('mousemove');
  });
  $('#rearm-mousemove').on('click', function () {
    panel.off('mousemove').on('mousemove', function (event) {
      $('#message').text('x=' + event.pageX + ' · y=' + event.pageY);
    });
    $('#message').text('mousemove is active again');
  });
});
