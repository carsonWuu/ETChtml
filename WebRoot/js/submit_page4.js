$("#submit").click(function(){
	var username= $("#username").val();
	var idcard= $("#idcard").val();
	if(username=='')return;
	console.log(username+idcard);
	
    $.ajax({
    	url:"data",
    	beforeSend: function(){
    		$('#bg').css({'height':$(document).height(),'width':$(document).width()});
    		document.getElementById("bg").style.display ="block";
		},	
    	success:function(result){
    	window.location.href='page5.html';
    }});
});