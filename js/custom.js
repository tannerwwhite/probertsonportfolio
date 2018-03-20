
//scroll to top 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    
    //menu slider 
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

});

//Carousel Hover Controller
$('#containerCarousel').carousel({
    interval: false
});

var i;

$('.carousel-inner').on("mouseover", function () {
    var control = $(this),
        interval = 500;

    i = setInterval(function () {
        control.trigger("click");
    }, interval);
})
.on("mouseout", function () {
    clearInterval(i);
});