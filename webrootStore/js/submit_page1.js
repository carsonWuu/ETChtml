$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	formdata.append("img1",$('#input_pic1')[0].files[0]);
	formdata.append("img2",$('#input_pic2')[0].files[0]);
	
	var username= $("#username").val();
	var idcard= $("#idcard").val();
	if(username==''||idcard==''||upload_pic1==false||upload_pic2==false) {//数据不完整
		return;
	}
	
	
	formdata.append("username",username);
	formdata.append("idcard",idcard);
	console.log(formdata);
	$.ajax({
		url:'imgUpload3',
		type:'POST',
		cache:false,
//		async:true,
		data:formdata,
		processData:false,
		contentType:false,
		success:function(result){
			
    		window.location.href='/ETCweChat/page2.html';
			return false;
    	}
	});
}