$("#submit").click(function(){
	var username= $("#username").val();
	var idcard= $("#idcard").val();
	if(username=='')return;
	console.log(username+idcard);
	
    $.ajax({url:"data",success:function(result){
    	window.location.href='/ETCweChat/page5.html';
    }});
});