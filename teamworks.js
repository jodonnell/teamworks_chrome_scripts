$(document).ready(function(){
    $(window).keypress(function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;

        workingStyles();

        event.preventDefault();
        return false;
    });    
});

function workingStyles() {
    if (window.location.pathname.match(/working-styles$/)) {
        $('.orb').click();
        $('.option1').click(); 
        _.times(11, function() {$('.orb').click() }); 
        $('.box').first().click(); 
        $('.orb').click();
    }
}




