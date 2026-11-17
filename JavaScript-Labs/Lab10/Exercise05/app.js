const panel = $('.panel, #panel').first();
$('#insert-image').on('click', function () {
  const image = $('<img>', { src: '../images/art/thumbs/13030.jpg', alt: 'Tranh được chèn bằng jQuery', class: 'demo-image inserted-art', css: { width: '150px', margin: '12px 10px 0 0' } });
  const method = $('#insert-method').val();
  if (method === 'after') panel.after(image);
  else if (method === 'before') panel.before(image);
  else if (method === 'append') panel.append(image);
  else if (method === 'prepend') panel.prepend(image);
  else if (method === 'appendTo') image.appendTo(panel);
  else if (method === 'prependTo') image.prependTo(panel);
  else if (method === 'insertBefore') image.insertBefore(panel);
  $('#insert-status').text('Đã chèn ảnh bằng ' + method + '().');
});
$('#clear-images').on('click', function () {
  $('.inserted-art').remove();
  $('#insert-status').text('Đã xóa ảnh đã chèn.');
});
