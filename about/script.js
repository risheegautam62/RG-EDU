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
