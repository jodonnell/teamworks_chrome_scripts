$(document).ready(function(){
    $(window).keypress(function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;

        workingStyles();
        skills();

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

function skills() {
    if (window.location.pathname.match(/skills$/)) {
        $('.orb').click();
        $('.option1 .add').click()
        $('.option1 textarea').val('Yummy!');
        $('.option1 textarea').blur();
        $('.orb').click();

        $('.suggestion.out-of-the-box').first().click();
        $('.option2 .add').click();
        $('.suggestion.out-of-the-box').get(2).click();
        $('.option3 .add').click();
        $('.suggestion.out-of-the-box').get(3).click();
        $('.orb').click();

        $('.option1 .add').click()
        $('.option1 textarea').val('Yummy!');
        $('.option1 textarea').blur();
        $('.orb').click();
    }
}
