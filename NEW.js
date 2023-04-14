'use strict'

$(function () {
//settings for slider, we nedd to know the widrh of the slide so that we know how far it should slide down

var width =720;
//it takes 2 seconds to transition between slides
var animationSpeed = 2000;
//Jquery will que up actions and events so make sure that tyour animatedspeed to pause or it will keep runing 
var pause = animationSpeed + 500;
var currentSlide = 1;


//cache DOM elements

var $slideContainer= $('.slides')
var $slides = $('.slide')

var interval;

//create a function that will start the slider 
function startSlider(){
    interval = setInterval(function(){
        //animating the slidecontainwr will cause the action in the brackes, targeting the css
        $slideContainer.animate({'margin-left':'-='+width},
        //it will do this animation every time at this length
        animationSpeed,
        //we can run a callback functuon atr the end if we choose to
        function () {
            // we track the slide that we are on
            currentSlide++;
            //This happens after the animation, so if the length is greater than the slide 6 we reset it to 1

            //sence slide1 is the first and last slide on the deck, te user wont nocice when we reset it back to slide 1

            if(currentSlide === $slides.length){
                currentSlide = 1;
                $slideContainer.css('margin-left',0)
            }
        })
        //it will repeat its action every THIS often
    }, pause)
}
//Create a function that will remove the slider
function pauseSlider(){

    clearInterval(interval)
}
//start
startSlider();

//if the mouse hovers over the slide the animation stops and then it leaves it starts again
$slideContainer
    .on('mouseenter', pauseSlider)
    .on('mouseleave',startSlider)

})
