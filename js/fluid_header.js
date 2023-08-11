$(function () {
	//  jquery시작
	//pc 메뉴
	$('#pc_menu, #navi_bg')
		.mouseenter(function () {
			$('#pc_menu .nevi_sec, #navi_bg').stop().slideDown('fast');
		})
		.mouseleave(function () {
			$('#pc_menu .nevi_sec, #navi_bg').stop().slideUp('fast');
		});

	/*모바일 네비게이션 복제*/
	var naviClon = $('#pc_menu').contents().clone();
	$('#mb_navi_wrap').append(naviClon);

	//모바일 서브메뉴 닫힘
	$('#mb_navi_wrap .nevi_sec').hide();

	/*모바일 버튼 클릭시 모바일 메뉴 나오기*/

	$('#m_menu').click(function () {
		$('#mb_navi').stop().animate(
			{
				left: 0,
			},
			300
		);
	});

	// 닫기 버튼 클릭시 모바일 메뉴 들어가기
	$('#mb_navi .colse').click(function () {
		$('#mb_navi').stop().animate(
			{
				left: '-100%',
			},
			300
		);
		$('#mb_navi_wrap>ul>li .nevi_sec').hide();
		$('#mb_navi_wrap>ul>li>a').removeClass('selected');
	});

	//모바일 메뉴를 클릭시 서브메뉴 열기

	$('#mb_navi_wrap>ul>li>a').click(function () {
		$(this).toggleClass('selected');
		$('#mb_navi_wrap>ul>li>a').not(this).removeClass('selected');

		$(this).find('+.nevi_sec').slideToggle('fast');
		$('#mb_navi_wrap>ul>li>a').not(this).find('+.nevi_sec').slideUp('fast');

		return false;
	});

	//pc해상도 에서 모바일 메뉴 들어가기
	$(window).resize(function () {
		if ($(window).outerWidth() > 800) {
			$('#mb_navi').css({ right: '-100%' });
			$('#mb_navi_wrap>ul>li .nevi_sec').hide();
			$('#mb_navi_wrap>ul>li>a').removeClass('selected');
		}
	});
}); //jquery 종료
