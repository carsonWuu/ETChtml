$("#submit").click(function(){
	
    fileUpload();
    
});


function fileUpload(){
	var formdata = new FormData();
	formdata.append("img1",$('#input_pic1')[0].files[0]);
	formdata.append("img2",$('#input_pic2')[0].files[0]);
	formdata.append("img3",$('#input_pic3')[0].files[0]);
	
	var carusername= $("#carusername").val();
	var idcard= $("#idcard").val();
	var carcolor= $("#carcolor").val();
	var cartype= $("#cartype").val();
	var carnum= $("#carnum").val();
	var carcode= $("#carcode").val();
	var carfunc= $("#carfunc").val();
	var carmodel= $("#carmodel").val();
	
	var enginenum= $("#enginenum").val();
	var carredate= $("#carredate").val();
	var caropendate= $("#caropendate").val();
	var carsizes= $("#carsizes").val();
	if(carusername==null||carusername=='') {//数据不完整
		window.alert("请填写车主姓名");
		return;
	}
	if(idcard==null||idcard=='') {//数据不完整
		window.alert("请填写车牌号码");
		return;
	}
	if(upload_pic1==null||upload_pic1=='') {//数据不完整
		window.alert("请上传行驶证正页");
		return;
	}
	if(upload_pic2==null||upload_pic2=='') {//数据不完整
		window.alert("请上传行驶证副页");
		return;
	}
	if(upload_pic3==null||upload_pic3=='') {//数据不完整
		window.alert("请上传车头证含车牌");
		return;
	}
	if(carcolor==null||carcolor=='') {//数据不完整
		window.alert("请填写车牌颜色");
		return;
	}
	if(cartype==null||cartype=='') {//数据不完整
		window.alert("请填写车牌类型");
		return;
	}
	if(carnum==null||carnum=='') {//数据不完整
		window.alert("请填写核定载人数");
		return;
	}
	if(carcode==null||carcode=='') {//数据不完整
		window.alert("车辆识别码");
		return;
	}
	if(carfunc==null||carfunc=='') {//数据不完整
		window.alert("请填写使用性质");
		return;
	}
	if(carmodel==null||carmodel=='') {//数据不完整
		window.alert("请填写品牌型号");
		return;
	}
	if(enginenum==null||enginenum=='') {//数据不完整
		window.alert("请填写发动机号码");
		return;
	}
	if(carredate==null||carredate=='') {//数据不完整
		window.alert("请填写注册日期");
		return;
	}
	if(caropendate==null||caropendate=='') {//数据不完整
		window.alert("请填写发证日期");
		return;
	}
	if(carsizes==null||carsizes=='') {//数据不完整
		window.alert("请填写外廓尺寸");
		return;
	}
	
	
	var idcard= $("#idcard").val();
	var carcolor= $("#carcolor").val();
	var cartype= $("#cartype").val();
	var carnum= $("#carnum").val();
	var carcode= $("#carcode").val();
	var carfunc= $("#carfunc").val();
	var carmodel= $("#carmodel").val();
	
	var enginenum= $("#enginenum").val();
	var carredate= $("#carredate").val();
	var caropendate= $("#caropendate").val();
	var carsizes= $("#carsizes").val();
	
	
	formdata.append("carusername",carusername);
	formdata.append("idcard",idcard);
	formdata.append("carcolor",carcolor);
	formdata.append("cartype",cartype);
	formdata.append("carnum",carnum);
	formdata.append("carcode",carcode);
	formdata.append("carfunc",carfunc);
	formdata.append("carmodel",carmodel);
	formdata.append("enginenum",enginenum);
	formdata.append("carredate",carredate);
	formdata.append("caropendate",caropendate);
	formdata.append("carsizes",carsizes);
	
	
	console.log(formdata);
	$.ajax({
		url:'imgUpload2',
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
			window.location.href='page3.html';
    	}
	});
}
