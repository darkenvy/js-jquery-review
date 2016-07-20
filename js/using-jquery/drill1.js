$(function(){
    console.log('The dom is ready! (drill 1)');
    $('.stage').css({position: 'relative'});
    $('.ball').css({position: 'absolute'});
    $('.ball').click(function(obj) {
      $('.ball').fadeOut(function() {
        $('.ball').css({top: Math.random()*500, left: Math.random()*900})
        $('.ball').fadeIn();
      });
      // $('.ball').position()
    })

});

