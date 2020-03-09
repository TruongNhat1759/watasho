// JavaScript Document
$(function(){
"use strict";
var object= {
	init : function(){
	 this.idxSlider();
	},
 	idxSlider: function() {
        $('.idx-slider ul').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            autoplaySpeed: 5000,
            fade: true,
            cssEase: 'linear'
        });
        $('.b04-list').slick({
            autoplay: true,
            dots: false,
            arrows: false,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: true,
            variableWidth: true
        });
 	},
};
object.init();
});