$(function(){
    console.log('The dom is ready! (drill 4)');

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);
    $('#doIt').on('click', action)

});




//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}
// $($('.shape')[10]).text()
var action = function() {
  var whoDo = $('#whoDo').val()
  var whatDo = $('#whatDo').val()
  var getOnly = function() {
    if (whoDo == 'even') {
      return
    }
  }
  console.log('whodo: ', whoDo);
  if (whatDo == 'red') {
    $('.shape').css({backgroundColor: 'red'})
  }
  if (whatDo == 'blue') {
    $('.shape').css({backgroundColor: 'blue'})
  }
  if (whatDo == 'purple') {
    $('.shape').css({backgroundColor: 'purple'})
  }
  if (whatDo == 'yellow') {
    $('.shape').css({backgroundColor: 'yellow'})
  }
  if (whatDo == 'orange') {
    $('.shape').css({backgroundColor: 'orange'})
  }
  if (whatDo == 'square') {
    $('.shape').removeClass('ball')
  }
  if (whatDo == 'circle') {
    $('.shape').addClass('ball')
  }
  if (whatDo == 'fadeout') {
    $('.shape').fadeOut()
  }
  if (whatDo == 'fadein') {
    $('.shape').fadeIn()
  }
}
