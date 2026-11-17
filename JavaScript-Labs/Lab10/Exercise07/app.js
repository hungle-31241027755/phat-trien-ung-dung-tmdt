$(function () {
  function removePreview() {
    $(this).removeClass('gray');
    $('#preview').stop(true, true).remove();
  }
  function movePreview(event) {
    $('#preview').css({ top: (event.pageY - 10) + 'px', left: (event.pageX + 24) + 'px' });
  }
  $('.preview-gallery img').on('mouseover', function (event) {
    $('#preview').remove();
    const alt = $(this).attr('alt');
    const src = $(this).attr('src');
    const preview = $('<div id="preview" role="status"></div>');
    const image = $('<img>', { src: src.replace('/small/', '/medium/'), alt: alt + ' preview' });
    const caption = $('<p>').text(alt);
    preview.append(image, caption).appendTo('body').css({ top: (event.pageY - 10) + 'px', left: (event.pageX + 24) + 'px' }).hide().fadeIn(180);
    $(this).addClass('gray');
  }).on('mouseleave', removePreview).on('mousemove', movePreview);
});
