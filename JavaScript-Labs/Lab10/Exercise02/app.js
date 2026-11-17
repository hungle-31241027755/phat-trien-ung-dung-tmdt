$('#change-values').on('click', function () {
  const msg = $('#msgArea');
  msg.val('My class is ' + msg.attr('class'));
  $('#first').html('New <em>title</em>');
  $('button').css({'background-color': '#b42318',color:'#fff'});
  $('.center-icons').addClass('selected');
  $('body').addClass('jquery-demo-active');
});
$('#reset-values').on('click', function () {
  $('#first').text('Original title');
  $('#msgArea').val('');
  $('button').css({'background-color':'',color:''});
  $('.center-icons').removeClass('selected');
  $('body').removeClass('jquery-demo-active');
});
