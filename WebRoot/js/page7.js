$(function(){
	/*
	 * 动态改变身份证尺寸：(两张图片)
	 * 根据宽度进行高度适配，height=width*0.75
	 */
	var root = $(".details");
	var height =root.height();//alert(realWidth);
	
	$(".pic2").css({height:height});
	
	console.log($(".card").width())
	$(".pic").css({height:$(".card").width()*0.5});
	
	
});
