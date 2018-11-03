$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	
	
	var username= $("#username").val();
	var idcard= $("#idcard").val();
//	username='a';
//	idcard='1232';
	if(username==''||idcard=='') {//数据不完整
		console.log("信息不完整");
		return;
	}
	
	
	formdata.append("username",username);
	formdata.append("idcard",idcard);
	console.log(formdata);
	$.ajax({
		url:'imgUpload',
		type:'POST',
		cache:false,
		data:formdata,
		processData:false,
		contentType:false,
		success:function(result){
    		window.location.href='/ETCweChat/page4.html';
    	}
	});
}
