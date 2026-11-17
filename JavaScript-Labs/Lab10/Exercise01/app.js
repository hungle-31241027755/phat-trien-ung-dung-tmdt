if (window.jQuery) {
  $('#jquery-status').text('jQuery đã sẵn sàng (' + (window.jQueryLoadedFrom || 'CDN') + ').').addClass('state-good');
  $('#jquery-version').text($.fn.jquery);
  $('#jquery-test').on('click', function () {
    $('#jquery-result').text('Selector #jquery-test tìm được ' + $('button').length + ' button trên trang.');
  });
} else {
  document.getElementById('jquery-status').textContent = 'jQuery chưa tải được. Kiểm tra kết nối hoặc đường dẫn fallback.';
  document.getElementById('jquery-status').className = 'state-error';
}
