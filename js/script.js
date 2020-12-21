$('.carousel').carousel({
    interval: 500
});

$('body').scrollSpy({target: ".navbar", offset: 150});

$('.navbar-brand, #home, #about, #services, #blog, #contact').click(function(event) {
    if(this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body, section').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {
                window.location.hash = hash;
            });
    }
});