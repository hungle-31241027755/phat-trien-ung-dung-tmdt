const cityEndpoint = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
const localCities = '../data/cities.json';
function renderCities(data, source, status) {
  if (!Array.isArray(data)) throw new Error('Dữ liệu trả về không phải một danh sách JSON.');
  const list = $('<ul>');
  $.each(data, function (index, value) {
    $('<li>').text(value.name).appendTo(list);
  });
  $('#results').empty().append(list);
  $('#request-source').text(source + ' · ' + data.length + ' thành phố');
  $('#loading').addClass('hidden').text('Đã tải');
  console.info('GET status:', status);
}
$('#consume').on('click', function () {
  $('#loading').removeClass('hidden').text('Đang tải…');
  $('#request-source').text('Đang gửi GET…');
  $('#consume').prop('disabled', true);
  $.ajax({ url: cityEndpoint, method: 'GET', dataType: 'json', timeout: 5000 }).done(function (data, status) {
    if (status === 'success' && Array.isArray(data)) renderCities(data, 'Nguồn: dịch vụ HTTPS', status);
    else loadLocalCities('Dịch vụ trả dữ liệu không đúng định dạng');
  }).fail(function (xhr, status, error) {
    console.warn('GET dịch vụ mẫu không thành công:', status, error);
    loadLocalCities('Dịch vụ ngoài không phản hồi');
  }).always(function () {
    $('#consume').prop('disabled', false);
  });
});
function loadLocalCities(reason) {
  $.getJSON(localCities).done(function (data) {
    renderCities(data, 'Nguồn dự phòng: JSON cục bộ', 'success');
    $('#request-source').attr('title', reason);
  }).fail(function (xhr, status) {
    $('#loading').addClass('hidden');
    $('#request-source').text('Không tải được dữ liệu (' + status + ')');
    $('#results').text('Hãy chạy trang qua một máy chủ tĩnh để cho phép GET tệp JSON cục bộ.');
  });
}
