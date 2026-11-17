const box = $('#box');
$('#run-animation').on('click', function () {
  const stage = $('#animation-stage');
  const endLeft = Math.max(0, Math.min(495, stage.innerWidth() - 90));
  const endTop = Math.max(0, stage.innerHeight() - 140);
  box.stop(true, true).animate({ left: endLeft, opacity: 1, height: '50px' }, 650)
    .animate({ top: endTop, opacity: 0.35 }, 700)
    .animate({ height: '120px', opacity: 1 }, 900);
});
$('#reset-animation').on('click', function () {
  box.stop(true, true).css({ top: '15px', left: '0', height: '74px', opacity: 0.55 });
});
