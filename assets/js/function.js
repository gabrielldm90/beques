$(document).ready(function () {
	/*
	 * var textarea = $('#textarea').val(); var caracteres = textarea.length
	 * console.log(textarea); console.log(caracteres);
	 * $('#textarea').change(function(){ alert('cambio valor'); var textarea =
	 * $('#textarea').val(); var caracteres = textarea.length;
	 * console.log(textarea); console.log(caracteres); });
	 */

	//detectar el navegador
	// if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) {
	// 	alert('es ipod ',navigator.userAgent);
	// 	$('main').css("margin-top", "0");
	// }
	// else{
	// 	alert('NO ES ipod ',navigator.userAgent);
	// }

	$('#p-qevaluation').click(function () {
		$('#h-qevaluation').fadeIn('fast');
		$('.popup-overlay').fadeIn('fast');
		$('.popup-overlay').height($(window).height());
		$("body").css({
			"overflow": "hidden"
		});
		return false;
	});

	$('#p-personaldata').click(function () {
		$('#h-personaldata').fadeIn('fast');
		$('.popup-overlay').fadeIn('fast');
		$('.popup-overlay').height($(window).height());
		$("body").css({
			"overflow": "hidden"
		});
		return false;
	});

	$('#p-card').click(function () {
		$('#h-card').fadeIn('fast');
		$('.popup-overlay').fadeIn('fast');
		$('.popup-overlay').height($(window).height());
		$("body").css({
			"overflow": "hidden"
		});
		return false;
	});

	//HELP DIALOG
	// $('#open').click(function(){
	//     $('#popup').fadeIn('fast');
	//     $('.popup-overlay').fadeIn('fast');
	//     $('.popup-overlay').height($(window).height());
	//     $("body").css({
	// 		"overflow" : "hidden"
	// 	});
	//     return false;
	// });

	// $('.close').click(function(){
	//     $('.popup').fadeOut('fast');
	//     $('.popup-overlay').fadeOut('fast');
	//     $("body").css({
	// 		"overflow" : "auto"
	// 	});
	//     return false;
	// });

	// var maximo1 = 1000;
	// var textarea1
	// var caracteres1

	//limitar1(1000);
	//	document.getElementById("textarea1").onchange = function() {
	//		limitar1(1000);
	//	};
	//	function limitar1(maximo) {
	//		var textarea1 = $("#textarea1").val();
	//		var caracteres1 = textarea1.length
	//		var resultado = maximo - caracteres1;		
	//		$(".textarea1 span span").empty();
	//		$(".textarea1 span span").append(resultado);
	//		if(resultado < 0){
	//			$(".textarea1 span").css({
	//				"color" : "red"
	//			});
	//		}
	//		else{
	//			$(".textarea1 span").css({
	//				"color" : "inherit"
	//			});
	//		}
	//	}

	// var close = true;
	// $('.menu-bars')

	// abrir menu mobile
	// $('.menu-container').click(function() {
	// 	console.log('menu bars');
	// 	var resolution = $(window).outerWidth();

	// 	if (resolution < 1024) {
	// 		if ($("nav").css("display") == "none") {
	// 			;
	// 			$("nav").css({
	// 				"display" : "block",
	// 				"overflow" : "auto"

	// 			});

	// 			$("body").css({
	// 				"overflow" : "hidden"
	// 			});
	// 		}
	// 	}
	// });

	// // cerrar menu mobile
	// $('.iconbutton').click(function() {

	// 	var resolution = $(window).outerWidth();

	// 	if (resolution < 1024) {
	// 		if ($("nav").css("display") == "block") {

	// 			$("nav").css({
	// 				"display" : "none",
	// 				"overflow" : "auto"

	// 			});

	// 			$("body").css({
	// 				"overflow" : "auto"
	// 			});
	// 		}

	// 	}

	// });
	// // abrir menu profile
	// $('.profile-container').click(function() {
	// 	console.log('entro profile-container');
	// 	if ($(".profile-menu-container").css("display") == "none") {

	// 		$(".profile-menu-container").css({
	// 			"display" : "block",
	// 			"overflow" : "auto"
	// 		});

	// 		$("body").css({
	// 			"overflow" : "hidden"
	// 		});
	// 	}

	// });
	// // cerrar menu profile
	// $('.profile-iconbutton').click(function() {
	// 	console.log('entro profile-iconbutton');

	// 	if ($(".profile-menu-container").css("display") == "block") {

	// 		$(".profile-menu-container").css({
	// 			"display" : "none",
	// 			"overflow" : "auto"

	// 		});

	// 		$("body").css({
	// 			"overflow" : "auto"
	// 		});
	// 	}

	// });

	// $('.level2').click(function() {

	// 	$('.level2').not($(this)).removeClass('active');
	// 	$(this).toggleClass('active');

	// });
});
