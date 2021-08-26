'use strict';

$(document).ready(function(){
	$('.header__link-buton').on('click', function(){
		$(this).toggleClass('burger__link-active');
		$('.burger__list').toggleClass('hiden');
		
  });
});
