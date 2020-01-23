/**
 * 
 */
//제이쿼리 라이브러리에 만든 함수를 넣는다라는 의미
$.fn.green = function(){
	$(this).css("background-color", "green");
}

$.fn.setBgColor = function(color){
	$(this).css("background-color", color);
}

$.fn.hideTest = function(){
	$(this).addClass("hideTest");
}
