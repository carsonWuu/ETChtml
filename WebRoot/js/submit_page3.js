$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	
	
	var username= $("#username").val();
	var phone= $("#phone").val();
	var imessage= $("#imessage").val();
	var area= $("#area").val();
	var location= $("#location").val();
//	username='a';
//	idcard='1232';
	if(username==null|| username=='') {//数据不完整
		window.alert("请填写收货人");
		
		return;
	}
	if(phone==null|| phone=='') {//数据不完整
		window.alert("请填写手机号码");
		
		return;
	}
	if(imessage==null|| imessage=='') {//数据不完整
		window.alert("请填写短信验证码");
		
		return;
	}
	if(area==null|| area=='') {//数据不完整
		window.alert("请选择地区");
		
		return;
	}
	if(location==null|| location=='') {//数据不完整
		window.alert("请填写详细地址");
		
		return;
	}
	
	
	formdata.append("username",username);
	formdata.append("phone",phone);
	formdata.append("imessage",imessage);
	formdata.append("area",area);
	formdata.append("location",location);

	console.log(formdata);
	$.ajax({
		url:'imgUpload',
		type:'POST',
		cache:false,
		data:formdata,
		processData:false,
		contentType:false,
		beforeSend: function(){
			$('#bg').css({'height':$(document).height(),'width':$(document).width()});
			document.getElementById("bg").style.display ="block";
		},	
		success:function(result){
			setInterval(function(){window.location.href='page4.html'},3000);
    		
    	}
	});
}
