$(function(){
    console.log('The dom is ready! (drill 2)');
    $('.stage').css({position: 'relative'});
    $('.shape').css({position: 'absolute'});

    $(document).on('keyup',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
        if (event.which == 37 && $('.shape').position().left > 0) {
          $('.shape').css({left: $('.shape').position().left - 25})
        }
        if (event.which == 39 && $('.shape').position().left < 800) {
          $('.shape').css({left: $('.shape').position().left + 25})
        }
        if (event.which == 38 && $('.shape').position().top > 0) {
          $('.shape').css({top: $('.shape').position().top - 25})
        }
        if (event.which == 40 && $('.shape').position().top < 400) {
          $('.shape').css({top: $('.shape').position().top + 25})
        }
        if (event.which == 83) {
          // $('.shape').animate({left: $('.shape').position.left - 10})
        }
    });

});

