function picture_select1(){
	 document.getElementById("input_pic1").click(); 
}
function picture_select2(){
	 document.getElementById("input_pic2").click(); 
}
function picture_select3(){
	 document.getElementById("input_pic3").click(); 
}

upload_pic1=false;
upload_pic2=false;
upload_pic3=false;

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

var picture_upload3 =function(event){
	console.log("input")
    var files = event.target.files, file;
    if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0];// 文件大小校验的动作
               
        // 确认选择的文件是图片                
        if(file.type.indexOf("image") == 0) {
        	upload_pic3=true;
            var reader = new FileReader();
            reader.readAsDataURL(file);                    
            reader.onload = function(e) {
                // 图片base64化
                var imgUrl = this.result;
                $("#pic3").attr("src",imgUrl);
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
	
	img = $("#pic3");
	realWidth =img.width();//alert(realWidth);
	realHeight = realWidth*0.665;
	img.css({height:realHeight});
	
	
	$("#privateProtect").on("click",function(){
		
    	window.location.href='/ETCweChat/serviceprotocol.html';
	})
});




 