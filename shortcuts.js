$(document).ready(function(){
    $(window).keypress(function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;

        superpowers();
        workingStyles();
        skills();
        themes();
        report();

        statement()
        statementExcercise();
        personalRitual();

        ritual();
        ritualExcercise();
        
        event.preventDefault();
        return false;
    });    
});

function superpowers() {
    if (window.location.pathname.match(/superpowers\/diagnostic$/)) {
        $.fx.off = true;
        $('.orb.active').click();
        _.times(61, function() { $('.card.face-up').click(); });
        $('.orb.active').click();
    }
}


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

function themes() {
    if (window.location.pathname.match(/themes$/)) {
        $('.orb').click();
        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange')
        _.times(4, function() {$('.orb').click() }); 
    }
}

function statement() {
    if (window.location.pathname.match(/statement$/)) {
        clickLink($('.orb.active a'));
    }
}

function statementExcercise() {
    if (window.location.pathname.match(/statement\/exercise$/)) {
        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange')
        $('.orb.active').click();
    }
}

function personalRitual() {
    if (window.location.pathname.match(/purpose\/personal-ritual$/)) {
        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange')
        $('#bi-week').click()
        $('.orb.active').click();
    }
}

function ritual() {
    if (window.location.pathname.match(/ritual$/)) {
        $('.orb.active').click();
        $('.create.button').click();
        $('.orb.active').click();

        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange')
        $('#bi-week').click()
        $('.orb.active').click();
    }
}

function ritualExcercise() {
    if (window.location.pathname.match(/ritual\/exercise$/)) {
        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange')
        $('#bi-week').click()
        $('.orb.active').click();
    }
}

    
function report() {
    if (window.location.pathname.match(/report$/)) {
        clickLink($('.orb.active a'));
    }
}

function clickLink(link) {
		window.location = link[0].href;
}

function waitUntil(selector, func) {
    if ($(selector).is(':visible')) {
        func();
    }
    else {
        _.delay(waitUntil, 200, selector, func);
    }
}
