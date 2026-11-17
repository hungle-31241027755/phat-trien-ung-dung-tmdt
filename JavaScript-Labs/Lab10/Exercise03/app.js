$('#apply-advanced').on('click', function () {
  $(':password').css('background-color', '#fff0ad');
  $('form :nth-child(4n)').css('outline', '2px solid #a5c742');
  $('label:contains("word")').css('color', '#537c1f');
  $('#advanced-output').text('Đã đánh dấu trường password, phần tử con thứ 4n và nhãn có chứa “word”.');
});
$('#reset-advanced').on('click', function () {
  $('#selector-form *').css({ backgroundColor: '', outline: '', color: '' });
  $('#advanced-output').text('Đã xóa các kiểu đánh dấu.');
});
