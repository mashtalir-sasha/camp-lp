$(function() {

	// Старт видео при загрузке
	document.getElementById('mov').play();

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-0 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.mob-mnu__btn').click(function() {
		$('.mob-mnu').toggleClass('show');
	});
	$('.mob-mnu-list__item a, .mob-mnu__close').click(function() {
		$('.mob-mnu').removeClass('show');
	});

	// Формирование полей и заголовков формы в мод окне
	$('.modal_event').click(function(){
		var place = $(this).data('place');
		$('.place').val(place);
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Спасибо за Вашу заявку!</h3><p>Наш специалист по танцам в течении часа свяжется с Вами и расскажет подробнее о школе, программах лагерей 2019, о броне и ценах</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox, .modal_event').fancybox({
		margin: 0,
		padding: 0,
		touch: false
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('body').offset().top
		}, 300);
		e.preventDefault();
	});

});
