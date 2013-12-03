$(document).ready(function(){
    window.addEventListener("resize", function(){
        if(window.screen.width > 1200)
            $("#sidebar a i").removeClass("fa-4x").addClass("fa-5x");
        if(window.screen.width < 1200 && $("#sidebar a i")[0].hasClass('fa-5x'))
            $("#sidebar a i").removeClass("fa-5x").addClass("fa-4x");
    });
});
