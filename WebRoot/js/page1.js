function picture_select1(){
	 document.getElementById("input_pic1").click(); 
}
function picture_select2(){
	 document.getElementById("input_pic2").click(); 
}
var changeSubmit=function() {
	var username= $("#username").val();
	var idcard= $("#idcard").val();
	if(username!=''&&idcard!=''&&upload_pic1==true&&upload_pic2==true) {//数据不完整
		$('#submit').attr('class','green button');
	}
}
upload_pic1=false;
upload_pic2=false;

var picture_upload1 =function(event){
	console.log("input")
    var files = event.target.files, file;
    if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0];// 文件大小校验的动作
        console.log(file)         
        // 确认选择的文件是图片                
        if(file.type.indexOf("image") == 0) {
        	upload_pic1=true;
            var reader = new FileReader();
            reader.readAsDataURL(file);                    
            reader.onload = function(e) {
                // 图片base64化
                var imgUrl = this.result;
                $("#pic1").attr("src",imgUrl);
            };
        }
    }
};

var picture_upload2 =function(event){
	console.log("input")
    var files = event.target.files, file;
    if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0];// 文件大小校验的动作
               
        // 确认选择的文件是图片                
        if(file.type.indexOf("image") == 0) {
        	upload_pic2=true;
            var reader = new FileReader();
            reader.readAsDataURL(file);                    
            reader.onload = function(e) {
                // 图片base64化
                var imgUrl = this.result;
                $("#pic2").attr("src",imgUrl);
            };
        }
    }
};

$(function(){
	/*
	 * 动态改变身份证尺寸：(两张图片)
	 * 根据宽度进行高度适配，height=width*0.75
	 */
	
	var img = $("#pic1");
	var realWidth =img.width();//alert(realWidth);
	var realHeight = realWidth*0.665;
	img.css({height:realHeight});
	
	img = $("#pic2");
	realWidth =img.width();//alert(realWidth);
	realHeight = realWidth*0.665;
	img.css({height:realHeight});
	
	
	$("#privateProtect").on("click",function(){
		
    	window.location.href='serviceprotocol.html';
	});
	
	$('body').height($('body')[0].clientHeight);
});

//window.onload=function () {
//    document.addEventListener('touchstart',function (event) {
//        if(event.touches.length>1){
//            event.preventDefault();
//        }
//    })
//    var lastTouchEnd=0;
//    document.addEventListener('touchend',function (event) {
//        var now=(new Date()).getTime();
//        if(now-lastTouchEnd<=300){
//            event.preventDefault();
//        }
//        lastTouchEnd=now;
//    },false)
//}

//window.onload = function () {
//    document.addEventListener('gesturestart', function (e) {
//        e.preventDefault();
//    });
//    document.addEventListener('dblclick', function (e) {
//        e.preventDefault();
//    });
//    document.addEventListener('touchstart', function (event) {
//        if (event.touches.length > 1) {
//            event.preventDefault();
//        }
//    });
//    var lastTouchEnd = 0;
//    document.addEventListener('touchend', function (event) {
//        var now = (new Date()).getTime();
//        if (now - lastTouchEnd <= 300) {
//            event.preventDefault();
//        }
//        lastTouchEnd = now;
//    }, false);
//};
//
//



 