$(function(){
    console.log('The dom is ready! (drill 3)');

    $('.shape').hover(function(e) {
      $('.shape').removeClass('ball').css({backgroundColor: 'yellow'})
    })
    $('.shape').mouseout(function(e) {
      $('.shape').addClass('ball').css({backgroundColor: 'blue'})
    })
});

