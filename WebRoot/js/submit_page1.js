$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	formdata.append("img1",$('#input_pic1')[0].files[0]);
	formdata.append("img2",$('#input_pic2')[0].files[0]);
	
	var username= $("#username").val();
	var idcard= $("#idcard").val();
	
	if(username==null||username=='') {//数据不完整
		window.alert("请填写姓名");
		return;
	}
	if(idcard==null||idcard=='') {//数据不完整
		window.alert("请填写身份证号");
		return;
	}
	if(upload_pic1==null||upload_pic1=='') {//数据不完整
		window.alert("请上传身份证人像面");
		return;
	}
	if(upload_pic2==null||upload_pic2=='') {//数据不完整
		window.alert("请上传身份证国徽面");
		return;
	}
	
	
	formdata.append("username",username);
	formdata.append("idcard",idcard);
	console.log(formdata);
	$.ajax({
		url:'imgUpload3',
		type:'POST',
		cache:false,
		async:false,
		data:formdata,
		processData:false,
		contentType:false,
		beforeSend: function(){
			$('#bg').css({'height':$(document).height(),'width':$(document).width()});
			document.getElementById("bg").style.display ="block";
		},	
		success:function(result){
			
    		window.location.href='page2.html';
			return false;
    	}
	});
}