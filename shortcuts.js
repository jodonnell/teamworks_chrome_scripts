var map = {

};

$(document).ready(function(){
    $(window).keypress(function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;

        board();
        
        superpowers();
        superpowersShow();
        workingStyles();
        skills();
        themes();
        report();

        statement()
        statementExcercise();
        personalRitual();

        ritual();
        ritualExcercise();

        forcesPrework();
        forcesMap();
        forcesDialague();

        reframingLenses();
        reframingPrework();
        reframingBrainstorming();

        boldMovesPrework();
        boldMovesRating();
        boldMovesFirstMove();

        outcomesPulseCheck();
        outcomesIdentifier();
        outcomesBriefs();
        outcomesBrief();
        
        event.preventDefault();
        return false;
    });    
});

function board() {
    if (window.location.pathname.match(/strengths$/)
        || window.location.pathname.match(/purpose$/)
        || window.location.pathname.match(/bold-moves$/)
        || window.location.pathname.match(/decisions$/)
        || window.location.pathname.match(/duos$/)
        || window.location.pathname.match(/reframing$/)
        || window.location.pathname.match(/outcomes$/)
        || window.location.pathname.match(/forces$/)) {
        $('.orb.start-loop').click();
        $('.confirm.button').click();
        _.delay(function () {
            var link = $($('.orb.active')[$('.orb.active').length - 2]);
            clickLink(link);
        }, 300);
    }
}
    
function superpowers() {
    if (window.location.pathname.match(/superpowers\/diagnostic$/)) {
        $.fx.off = true;
        $('.orb.active').click();
        _.delay(function () {
				    $('.card.face-up').click();
            superpowers();
        }, 200);
    }
}

function superpowersShow() {
    if (window.location.pathname.match(/strengths\/superpowers\/show$/)) {
        clickLink($('.orb.active'));
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
        clickLink($('.orb.active'));
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

function forcesPrework() {
    if (window.location.pathname.match(/forces\/pre-work$/)) {
        $('.orb.active').click();
        $('.force').slice(0, 3).click();
        $('.orb.active').click();
        $('.send.active').click();
        $('.orb.active').click();
    }
}

function forcesMap() {
    if (window.location.pathname.match(/forces\/map$/)) {
        $('.orb.active').click();
        _(_.rest(forceMap.pages)).each(function (page) {page.selectedValue(2)});
        _.times(4, function() {$('.orb.active').click() }); 
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

function forcesDialague() {
    if (window.location.pathname.match(/dialogue$/)) {
        _.times(4, function() {$('.orb.active').click() }); 
    }
}

function reframingLenses() {
		if (window.location.pathname.match(/lenses$/)) {
        _.times(4, function() {$('.orb.active').click() }); 
        $('textarea').val('sugarpops'); $('textarea').trigger('propertychange'); $('.button.create').click();
        _.delay(reframingLenses, 500);
    }
}

function reframingPrework() {
		if (window.location.pathname.match(/reframing\/pre-work$/)) {
        $('textarea').val('sugarpops'); $('textarea').trigger('keyup');
        $('.orb.active').click();
    }
}

function reframingBrainstorming() {
		if (window.location.pathname.match(/reframing\/brainstorming$/)) {
        $.fx.off = true;
        $('.orb.active').click();
        $('.go-circle.active label').click();

        _.delay(function () {
            $('.start.ready').click();
            $('textarea').val('yum');
            $('.save').click();
            $('.close-button').click();
            $('.orb.active').click();
        }, 6000);
    }
}

function boldMovesPrework() {
		if (window.location.pathname.match(/bold-moves\/pre-work$/)) {
        $('.orb.active').click();
        _.first($('.move')).click();
        $('textarea').val('cookie');
        $('textarea').trigger('propertychange')
        $('.save.button').click();

        $($('.move')[1]).click();
        $('textarea').val('cookie');
        $('textarea').trigger('propertychange');
        $('.save.button').click();

        _.delay(function () {
            $('.orb.active').click();
            $('.send.active').click();
            $('.orb.active').click();
        }, 400);
    }
}

function boldMovesRating() {
		if (window.location.pathname.match(/bold-moves\/rating$/)) {
        $('.orb.active').click();
        $('.orb.active').click();
        $('.ui-slider-handle').simulate( "drag", {dx: 50,  dy: 50 });
        _.delay(function () {
            $('.orb.active').click();
            $('.ui-slider-handle').simulate( "drag", {dx: 50,  dy: 50 });
            $('.orb.active').click();
        }, 800);
    }
}

function boldMovesFirstMove() {
		if (window.location.pathname.match(/bold-moves\/first-move$/)) {
        $('.orb.active').click();
        $('.orb.active').click();
        $('.large.size').click();
        $('.orb.active').click();
        _.first($('.percentage')).click();
        $('.orb.active').click();
        $('.move').click();
        $('.orb.active').click();
    }
}

function report() {
    if (window.location.pathname.match(/report$/)) {
        clickLink($('.orb.active'));
    }
}

function clickLink(link) {
    if (link.find('a').length > 0)
        window.location = link.find('a')[0].href;
    else
		    link.click();
}

function outcomesPulseCheck() {
		if (window.location.pathname.match(/outcomes\/pulse-check$/)) {
		    $('.orb.active').click();
        $('.ui-slider-handle').simulate( "drag", {dx: 50,  dy: 50 });
        $('textarea').val('cookie');
        $('textarea').trigger('keydown');
        $('.orb.active').click();

        $('.ui-slider-handle').simulate( "drag", {dx: 80,  dy: 50 });
        $('textarea').val('baby');
        $('textarea').trigger('keydown');
        $('.orb.active').click();

        $('.ui-slider-handle').simulate( "drag", {dx: 10,  dy: 50 });
        $('textarea').val('yummy');
        $('textarea').trigger('keydown');
        $('.orb.active').click();
    }
}

function outcomesIdentifier() {
		if (window.location.pathname.match(/outcomes\/identifier$/)) {
		    $('.orb.active').click();
        $('.option1 .add').click();
        $('.option1 .comment-box textarea').val('Big baby');
        $('.option1 .comment-box textarea').trigger('focus');
        $('.option1 .comment-box textarea').trigger('blur');
        _.delay(function () {
            $('.orb.active').click();				    
        }, 300);
    }
}

function outcomesBriefs() {
		if (window.location.pathname.match(/outcomes\/briefs$/)) {
        $('.orb.active').click();
        $('.orb.active').click();
        _.delay(function () {
            clickLink($('.goals'));
        }, 600);
    }
}

function outcomesBrief() {
		if (window.location.pathname.match(/outcomes\/briefs\/brief$/)) {
        $('.success').val('a thing here');
        $('.orb.active').click();
    }
}

function waitUntil(selector, func) {
    if ($(selector).is(':visible')) {
        func();
    }
    else {
        _.delay(waitUntil, 200, selector, func);
    }
}
