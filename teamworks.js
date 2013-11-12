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
        $('.orb.active').click();
        waitUntil('.page-container .tech-skills-page', function () {
            $.fx.off = true;

            $('.orb.active').click();
            var page1 = $('.page-container .tech-skills .option1');
            page1.find('.add').click()
            page1.find('textarea').val('Yummy!');
            page1.find('textarea').trigger('focus');
            page1.find('textarea').trigger('blur');

            _.delay(function() {
                $('.orb.active').click();

                var page2 = $('.page-container .soft-skills');
                page2.find('.option1 .add').click()
                $('.suggestion.out-of-the-box').first().click();
                page2.find('.option2 .add').click()
                $('.suggestion.out-of-the-box').get(2).click();
                page2.find('.option3 .add').click()
                $('.suggestion.out-of-the-box').get(3).click();

                _.delay(function() {
                    $('.orb.active').click();
                    waitUntil('.page-container .outside-skills-page', function () {
                        var page3 = $('.page-container .outside-skills .option1');
                        page3.find('.add').click()
                        page3.find('textarea').val('Yummy!');
                        page3.find('textarea').trigger('focus');
                        page3.find('textarea').trigger('blur');
                        _.delay(function() {
                            $('.orb.active').click();
                        }, 300);
                    });
                }, 300);
            }, 300);
        });
    }
}

function waitUntil(selector, func) {
    if ($(selector).is(':visible')) {
        func();
        alert('finish')
    }
    else {
        _.delay(waitUntil, 200, selector, func);
        alert('delay')
    }
}
