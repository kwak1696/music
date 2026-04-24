$(document).ready( function(){
	var iphoneCheck = "iPhone";
    
    if( navigator.userAgent.match(iphoneCheck) ) {
        $('#area2 .ITC01').css('margin-left', "-1px");
    }
});