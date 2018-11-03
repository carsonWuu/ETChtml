$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	formdata.append("img1",$('#input_pic1')[0].files[0]);
	formdata.append("img2",$('#input_pic2')[0].files[0]);
	formdata.append("img3",$('#input_pic3')[0].files[0]);
	
	var username= $("#username").val();
	var idcard= $("#idcard").val();
//	username='a';
//	idcard='1232';
	if(username==''||idcard==''||upload_pic1==false||upload_pic2==false||upload_pic3==false) {//数据不完整
		console.log("信息不完整");
		return;
	}
	
	
	formdata.append("username",username);
	formdata.append("idcard",idcard);
	console.log(formdata);
	$.ajax({
		url:'imgUpload2',
		type:'POST',
		cache:false,
		data:formdata,
		processData:false,
		contentType:false,
		success:function(result){
    		window.location.href='/ETCweChat/page3.html';
    	}
	});
}
