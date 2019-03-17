$(function() {

	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, winScr, _isresponsive, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - PAGE CALCULATIONS */
	/*========================*/
	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
		if($('.cmn-toggle-switch').is(':visible')) _isresponsive = true;
		else _isresponsive = false;
	}

	/*=================================*/
	/* 03 - FUNCTION ON DOCUMENT READY */
	/*=================================*/
	pageCalculations();
	//center all images inside containers
	$('.center-image').each(function(){
		var bgSrc = $(this).attr('src');
		$(this).parent().addClass('background-block').css({'background-image':'url('+bgSrc+')'});
		$(this).hide();
	});	

	/*============================*/
	/* 04 - FUNCTION ON PAGE LOAD */
	/*============================*/
	$(window).load(function(){
		$('.preload').fadeOut();
		$('.main-slider').addClass('active');
		
		if($(window).scrollTop()>0){
			$('.header').addClass('scrolled');
		} else {
			$('.header').removeClass('scrolled');
		}		
	});

	/*==============================*/
	/* 05 - FUNCTION ON PAGE RESIZE */
	/*==============================*/
	function resizeCall(){
		pageCalculations();
	}
	if(!_ismobile){
		$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}

	/*==============================*/
	/* 06 - FUNCTION ON PAGE SCROLL */
	/*==============================*/
	$(window).scroll(function(){
		winScr = $(window).scrollTop();
		if(winScr>0){
			$('.header').addClass('scrolled');
		} else {
			$('.header').removeClass('scrolled');
		}

		//opacity slider
		var opacityVar = 1-(winScr/winH);
		opacityVar = opacityVar * 1.3;
		if (opacityVar>=1){opacityVar=1;}
		$('.fullheight').css('opacity',opacityVar);

		var sliderHeight =50 + (50 * (winScr/$('.fullheight').height()));	
		$('.main-slider .vertical-align').css('top', sliderHeight+'%');
	});		

	/*==============================*/
	/* 08 - BUTTONS, CLICKS, HOVERS */
	/*==============================*/
	// top menu
	$(".cmn-toggle-switch").on("click", function(){
		$(this).toggleClass("active");
		$('.header').toggleClass("active");
		$('.main-nav').slideToggle();
		return false;
	});	
		 
    				
});