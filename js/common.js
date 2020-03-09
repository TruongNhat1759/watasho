// JavaScript Document
$(function() {
    "use strict";
  	var obj= {
	  	init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			// this.iconMenu();			
			this.Gnavi();			
	  	},
	  	//totop
	  	toTop: function(){
			$("#totop").hide();
			$(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
			});
			$("#totop").click(function(){
				$('body,html').animate({ scrollTop:0}, 500);
				return false;
			});
	  	},
	  	//smoothScroll
	  	smoothScroll : function(){
			$('a[href^="#"]').click(function(){
				var vW = $(window).width();
					if ( $( $(this).attr('href')).length ) {
						var p = $( $(this).attr('href') ).offset();
						if(vW <= 640){
							$('html,body').animate({ scrollTop: p.top - 90}, 500);
						} else {
							$('html,body').animate({ scrollTop: p.top - 20}, 500);
						}
					}
				return false;
			});
		},
	  // Anchor scroll
	  	anchorScroll : function(){
		  	$(window).load(function(){
				 var vW = $(window).width();
				 var hash1= location.hash;
				 var $root = $('html, body');
				 var top01 = $(hash1).offset(); 
					if(vW <= 640){
					 if(hash1!==""){ 	  
					  $root.animate({ scrollTop:top01.top - 90}, 500);  
					 }    
					} else {
					 if(hash1!==""){  		  
					  $root.animate({ scrollTop:top01.top - 20}, 500);  
					 }    
					}
			});			
		},
		Gnavi: function () {
		  $('.over').mouseenter(function () {
		    if ($(this).hasClass('flag')) {
		      return false;
		    } else {
		      $(this).find('.submenu').stop().slideDown();
		    }
		  });
		  $('.over').mouseleave(function () {
		    if ($(this).hasClass('flag')) {
		      return false;
		    } else {
		      $(this).find('.submenu').stop().slideUp();
		    }
		  });
		  $('.over').click(function() {
              if ($(this).hasClass('flag')) {
                  if ($(this).hasClass('active')) {
                      $('.submenu').stop().slideUp();
                      $(this).removeClass('active');
                  } else {
                      $('.over').removeClass('active');
                      $('.submenu').stop().slideUp();
                      $(this).addClass('active');
                      $(this).find('.submenu').stop().slideToggle();
                  }
              }
          });
		  $('.menu-icon').click(function () {
		    if ($(this).hasClass('active')) {
		      $('.menu-icon').removeClass('active');
		      $('#gnavi').stop().slideToggle();
		    } else {
		      $(this).toggleClass('active');
		      $('#gnavi').stop().slideToggle();
		    }
		  });
		  $(window).bind("load resize", function () {
              var vW = $(window).width();
              $('.menu-icon').removeClass('active');
              $('.over').removeClass('active');
              $('#gnavi').removeAttr('style');
              $('.submenu').removeAttr('style');
              if (vW > 640) {
              	$('.over').removeClass('flag');
              } else {
				$('.over').addClass('flag');
			}
          });
		},	
  };
  obj.init();
});


