document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

$(document).ready(function() {
    $(".hamburger").click(function() {
        $("#mySidebar").addClass("open");
        $("body").addClass("sidebar-open");
    });
    $(".closebtn").click(function() {
        $("#mySidebar").removeClass("open");
        $("body").removeClass("sidebar-open");
    });
    $(document).click(function(event) {
        if (!$(event.target).closest("#mySidebar, .hamburger").length && $("#mySidebar").hasClass("open")) {
            $("#mySidebar").removeClass("open");
            $("body").removeClass("sidebar-open");
        }
    });
});

$(document).ready(function () {
    // Initially hide the cards by moving them down and shrinking them
    $('.card').css({
        'transform': 'scale(0.8) translateY(100px)',
        'opacity': '0'
    });

    // On scroll, check if the cards come into view and apply animation
    $(window).on('scroll', function () {
        $('.card').each(function () {
            let cardPosition = $(this).offset().top;
            let screenPosition = $(window).scrollTop() + $(window).height() / 1.3;

            if (cardPosition < screenPosition) {
                $(this).css({
                    'transform': 'scale(1.05) rotate(0deg) translateY(0)',
                    'opacity': '1',
                    'transition': 'transform 0.8s ease, opacity 0.8s ease'
                });
            } else {
                $(this).css({
                    'transform': 'scale(0.8) translateY(100px)',
                    'opacity': '0',
                    'transition': 'transform 0.8s ease, opacity 0.8s ease'
                });
            }
        });
    });
});
