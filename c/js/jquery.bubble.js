$.fn.hint = function(msg) {
 
    var offset = this.offset(), // generate the offset position of the hinted element
        bubble = $('#bubble'), // cache the bubble as jQuery
        pointer = $('.pointer', bubble), // cache the pointer of the bubble
        fadeDistance = 50; // the distance from where the bubble will fade in
 
    // append the message to the bubble, position it and slowly fade it in
    bubble
        .find('span.content').html(msg).end() // insert the new message
        .css({
            top: offset.top - bubble.outerHeight() - pointer.outerHeight() + this.outerHeight()/4 - fadeDistance, // the element offset minus the height of the bubble, minus the height of the pointer, plus one quarter of the height of the element to be on top of it, minus the fading distance
            left: offset.left + this.outerWidth()*0.75 - 42 // the element offset + 3/4 of the element's width to position the bubble at the right side, minus the pixel width to the edge of the triangle
        })
        .animate({
            opacity: 1, // fades it in
            top: '+='+fadeDistance+'px' // moves it in from the fade distance that we substracted above
        }, 600);
 
    // make sure the bubble goes away when clicking on the hinted element
    return this.one('click', function() {
        bubble.animate({
            opacity: 0, // fades out
            top: '-='+fadeDistance+'px' // animate back the fade distance
        }, 300);
    });
 
};