$(document).ready(function () {
	common_load(); // 문서로드
	// heder_menu();
	menu_hover_event();
});

function common_load() {
	$('.header').load('header.html .header .bar, .gnb_wrap', function () {
		// 모바일 메뉴 취소버튼
		$('.quick_menu .mobile_close').click(function () {
			if ($('.quick_menu').hasClass('acitve')) {
				$('.quick_menu').removeClass('acitve');
				$('this').removeClass('acitve');
			} else {
				$('.quick_menu').addClass('acitve');
				$(this).addClass('acitve');
			}
			$('body').css({
				overflow: 'visible',
				position: 'static',
			});
		});
	});
	$('.footer').load('footer.html .footer .footer-wrap', function () {});
}

//메인 서브메뉴 호버
function menu_hover_event() {
	$('.pc_menu > ul > li').on('mouseover', function () {
		console.log('들어옴');

		$('.nevi_sec').removeClass('on'); //.in_sub_m on 클레스 제거
		$('.pc_menu>ul>li').removeClass('active'); //.left_bar ul li active 클래스 제거
		$(this).children('.nevi_sec').addClass('on'); //
		$('.pc_menu>ul>li').addClass('on');
	});

	// $('.gnb_in_wrap , .all_menu , .menu_right').on('mouseover', function () {
	// 	$('.menu_wrap .left_bar>ul>li>.in_sub_m').removeClass('on');
	// });
	$('.nevi_sec').on('mouseout', function () {
		$('.pc_menu>ul>li').removeClass('on');
	});
}

$(document).ready(function () {
	//  jquery시작
	var h_top; // 각 콘텐츠 영역의 높이 값
	var box_name, box_id;

	// 아래로 200px 스크롤 시 .go_top 버튼이 보임
	var offset = 200;
	$(window).scroll(function () {
		var st = $(this).scrollTop();

		if (st > offset) {
			$('.go_top').fadeIn(500); //0.5초 간격으로 나타난다
		} else {
			$('.go_top').fadeOut(300);
		}

		//각 콘텐트 요소 영역에 도달시 해당 메뉴 활성화
		$('#wrap > div').each(function () {
			var i = $(this).index();

			if ($(this).offset().top <= st) {
				$('#navi > ul >li').removeClass('on');
				$('#navi > ul >li').eq(i).addClass('on');
			}
		});

		//마지막 콘텐츠의 영역이 화면의 세로길이보다 적은 경우
		if (st >= $('#wrap').height() - $(window).height()) {
			$('#navi > ul >li').removeClass('on');
			$('#navi > ul >li:last').addClass('on');
		}
	}); //end : window.scroll()

	//go_top버튼 클릭 시 맨위로 스크롤

	$('.go_top').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			500
		);

		return false;
	});
}); //jquery 종료

$(function () {
	//  jquery시작

	$('.small_but ul li').click(function () {
		$('.small_but ul li').removeClass('on');
		$(this).addClass('on');

		$('.menu_bar>div').css({
			height: '0',
		});
		$('.menu_bar>div')
			.eq($(this).index())
			.css({
				height: '300px',
			})
			.css({
				height: 'auto',
			});

		return false;
	});
}); //jquery 종료

$(function () {
	//  jquery시작
	//오버시 어두워 자게 하는 박스 태그 추가
	$('#point-card ul li figuer img').append("div class='h_box'></div>");

	/*오버시 오버상태 이미지 아웃시 아웃상태 이미지로 바꿈*/
}); //jquery 종료

// var swiper2 = new Swiper('.mb1', {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	loop: true,

// 	pagination: {
// 		el: '.but2',
// 		clickable: true,
// 	},

// 	navigation: {
// 		nextEl: '.next2',
// 		prevEl: '.prev2',
// 	},

// 	breakpoints: {
// 		1100: {
// 			//화면 해상도
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},

// 		768: {
// 			//화면 해상도
// 			slidesPerView: 3,
// 			spaceBetween: 25,
// 		},

// 		640: {
// 			//화면 해상도
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},

// 		360: {
// 			//화면 해상도
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 		},
// 	},
// });

// var swiper2 = new Swiper('.mb2', {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	loop: true,

// 	pagination: {
// 		el: '.but2-2',
// 		clickable: true,
// 	},

// 	navigation: {
// 		nextEl: '.next2-2',
// 		prevEl: '.prev2-2',
// 	},

// 	breakpoints: {
// 		1100: {
// 			//화면 해상도
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},

// 		768: {
// 			//화면 해상도
// 			slidesPerView: 3,
// 			spaceBetween: 25,
// 		},

// 		640: {
// 			//화면 해상도
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},

// 		360: {
// 			//화면 해상도
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 		},
// 	},
// });

// var swiper2 = new Swiper('.mb3', {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	loop: true,

// 	pagination: {
// 		el: '.but2-3',
// 		clickable: true,
// 	},

// 	navigation: {
// 		nextEl: '.next2-3',
// 		prevEl: '.prev2-3',
// 	},

// 	breakpoints: {
// 		1100: {
// 			//화면 해상도
// 			slidesPerView: 4,
// 			spaceBetween: 30,
// 		},

// 		768: {
// 			//화면 해상도
// 			slidesPerView: 3,
// 			spaceBetween: 25,
// 		},

// 		640: {
// 			//화면 해상도
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},

// 		360: {
// 			//화면 해상도
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 		},
// 	},
// });

// 업데이트
$(function () {
	// 메인 상단 슬라이드
	var main_swiper = new Swiper('.inner-swiper', {
		// slidesPerView: 'auto',
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	// 비쥬얼 슬라이드 컨트롤러
	$('.btn_play').click(function () {
		var state = $(this).hasClass('stop');
		if (state) {
			main_swiper.autoplay.start();
			$(this).removeClass('stop');
		} else if (!state) {
			main_swiper.autoplay.stop();
			$(this).addClass('stop');
		}
	});

	var swiper = new Swiper('.swiper-menu1', {
		slidesPerView: '4', // 한 슬라이드에 보여줄 갯수
		spaceBetween: 6, // 슬라이드 사이 여백
		loop: false, // 슬라이드 반복 여부
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});

// 서브웨이 탭 메뉴
$(document).ready(function () {
	$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#' + tab_id).addClass('current');
	});
});
