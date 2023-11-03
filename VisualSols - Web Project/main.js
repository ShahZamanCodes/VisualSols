$(document).ready(function () {

    // Transition for hero-2 card
    $(window).scroll(function () {
        var element = $("#hero-2 .card");
        var element1 = $('#values #card-1')
        var element2 = $('#values #card-2')
        var element3 = $('#values #card-3')

        var positiontop = $(document).scrollTop();
        if ((positiontop > 580) && (positiontop < 850)) {
            $(element).addClass('hero-2-card');
        }
        if (positiontop > 850) {
            $(element).css({ 'transform': 'scale(1)' });
        }
        if ((positiontop > 1200) && (positiontop < 1400)) {

            $(element1).addClass('hero-section-1');
            $(element2).addClass('values-center-card');
            $(element3).addClass('hero-section-2');
        }
    });
});