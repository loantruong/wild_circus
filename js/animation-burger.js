$(document).ready(function () {
  $('.burger-menu').on('click', function() {
  $('.burger-menu .icon-bar:nth-of-type(1)').toggleClass('icon-bar--1');
  $('.burger-menu .icon-bar:nth-of-type(2)').toggleClass('icon-bar--2');
  $('.burger-menu .icon-bar:nth-of-type(3)').toggleClass('icon-bar--3');

  $('.burger-menu-text').toggleClass('burger-menu-text--open');
	});
});
