$(document).ready(function () {
    const $sliderTop = $('.top-row');
    const $sliderBottom = $('.bottom-row');
    const $nextBtn = $('.button-left');
    const $prevBtn = $('.button-right');
    const itemWidth = $('.slide-image').outerWidth();

    $prevBtn.on('click', function () {
        $sliderTop.css('transform', `translateX(${itemWidth}px)`);
        $sliderTop.children().first().appendTo($sliderTop);
        $sliderTop.css('transform', 'translateX(0)');

        $sliderBottom.css('transform', `translateX(${itemWidth}px)`);
        $sliderBottom.children().first().appendTo($sliderBottom);
        $sliderBottom.css('transform', 'translateX(0)');
    });

    $nextBtn.on('click', function () {
        $sliderTop.css('transform', `translateX(-${itemWidth}px)`);
        $sliderTop.children().last().prependTo($sliderTop);
        $sliderTop.css('transform', 'translateX(0)');

        $sliderBottom.css('transform', `translateX(-${itemWidth}px)`);
        $sliderBottom.children().last().prependTo($sliderBottom);
        $sliderBottom.css('transform', 'translateX(0)');
    });
});

