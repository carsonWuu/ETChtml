
function checkboxCLICK(checkbox){
 
	if ( checkbox.checked == true){
	 
		$('#submit').css('background-color','rgb(31,172,23)');
		$('#submit').attr('disabled',false);
	 
	} else{
		$('#submit').attr('disabled',true);
		$('#submit').css('background-color','rgb(221,221,221)');
	 
	}
 
}
$(function(){
	/*协议的点击效果
	 */
	
	$("#protocol_service").on("click",function(){
		
		$("#checkbox").prop("checked", false);
    	window.location.href='serviceprotocol.html';
	});
	$("#protocol_yuetongka").on("click",function(){
		$("#checkbox").prop("checked", false);
    	window.location.href='userprotocol.html';
	});
	$("#protocol_Eyuetongka").on("click",function(){
		$("#checkbox").prop("checked", false);
    	window.location.href='usageprotocol.html';
	});
	
});