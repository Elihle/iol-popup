if (localStorage.getItem('cookieSeen') != 'shown') {
    $('.cookie-banner').delay(2000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
  };
  $('.cookie-banner').click(function() {
    $('.cookie-banner').fadeOut();
  })