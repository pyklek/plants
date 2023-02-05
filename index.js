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
  const openPrices = document.querySelectorAll('.text_prices');
  
  openPrices.forEach((el) => el.firstElementChild.classList.add('no-border'));
  
  
  for (let i=0; i<openPrices.length; i++) {
     openPrices[i].addEventListener('click', (event) => {
        if (event.target.classList.contains('') && openPrices[i].classList.contains('hide-open')) {
           openPrices[i].classList.remove('hide-open');
           openPrices[i].firstElementChild.classList.add('no-border');
        } else {
           openPrices.forEach((el) => el.classList.remove('hide-open'));
           openPrices.forEach((el) => el.firstElementChild.classList.add('no-border'));
           openPrices[i].classList.add('hide-open');
           openPrices[i].firstElementChild.classList.remove('no-border');
        }
     })
  }
