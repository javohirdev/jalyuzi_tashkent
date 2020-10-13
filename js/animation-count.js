$('#counter-block').ready(function () {
    $('.first').animationCounter({
        start: 0,
        end: 628,
        step: 2,
        delay: 10
    });
    $('.second').animationCounter({
        start: 0,
        end: 1500,
        step: 6,
        delay: 17
    });
    $('.third').animationCounter({
        start: 0,
        end: 254,
        step: 1,
        delay: 10
    });
});