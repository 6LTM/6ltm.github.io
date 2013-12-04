$(document).ready(function(){
    var path = window.location.pathname;
    var categories = ["python", "vorbereitung", "projekt"];

    categories.forEach(function(category){
        if(path.indexOf(category) != -1){
            $("#navigation #cat-"+category).addClass("active");
        }
    });
});
