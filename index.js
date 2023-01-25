$(document).ready(function() {
	$('.burger').click(function(){
        $('.burger__line').toggleClass('open');
        $('.nav').toggleClass('open');
        $('body').toggleClass('fixed-page');
	});
});
$("body").live('click', function() {
    alert($(this).text());
  });