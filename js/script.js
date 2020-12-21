$('.carousel').carousel({
    interval: 500
});

$('.navbar .nav-link').click(function(event) {
    const destinat = $(this).attr('href');
    const destinatElement = $(destinat);
    $('html, body').animate({
        scrollTop: destinatElement.offset().top - 150
    }, 1500, 'easeInOutExpo');

    event.preventDefault();
});