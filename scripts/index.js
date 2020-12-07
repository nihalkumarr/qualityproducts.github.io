function onClickMenu(menu) {
  $('html, body').animate({ scrollTop: $(`#${menu}`).offset().top - 70 }, 'slow');
  return false;
}