$('.carousel').carousel({
    interval: 500
});

$('.page-scroll').on('click', function(e) {

    // Take the href
    const tujuan = $(this).attr('href');
    // Catch the Current Element
    const elemenTujuan = $(tujuan);

    // Change the scroll destination
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-100
    }, 1000, 'easeInOutExpo');

    e.preventDefault();

});