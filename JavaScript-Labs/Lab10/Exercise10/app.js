const cityEndpoint = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
const localCities = '../data/cities.json';
function renderCityList(data, source) {
  const list = $('<ul>');
  $.each(data, function (index, city) { $('<li>').text(city.name).appendTo(list); });
  $('#results').empty().append(list);
  $('#request-source').text(source + ' · ' + data.length + ' thành phố');
}
$('#consume').on('click', function () {
  let usedLocalFallback = false;
  $('.animLoading').removeClass('hidden').text('Đang tải…');
  $('#request-source').text('Đang gửi request…');
  $('#consume').prop('disabled', true);
  $.ajax({ url: cityEndpoint, method: 'GET', dataType: 'json', timeout: 5000 }).then(
    function (data) {
      if (!Array.isArray(data)) {
        usedLocalFallback = true;
        return $.getJSON(localCities);
      }
      return data;
    },
    function (xhr, status, error) {
      console.warn('External GET failed; loading local JSON:', status, error);
      usedLocalFallback = true;
      return $.getJSON(localCities);
    }
  ).done(function (data) {
    renderCityList(data, usedLocalFallback ? 'Nguồn: JSON cục bộ dự phòng' : 'Nguồn: dịch vụ HTTPS');
    console.info('jqXHR done(): request data rendered');
  }).fail(function (xhr, status, error) {
    $('#request-source').text('Không tải được dữ liệu: ' + (status || error || 'error'));
    $('#results').text('Hãy mở bài tập qua máy chủ tĩnh để tải JSON cục bộ.');
    console.error('jqXHR fail():', status, error);
  }).always(function () {
    $('.animLoading').addClass('hidden');
    $('#consume').prop('disabled', false);
    console.info('jqXHR always(): loading indicator hidden');
  });
});
