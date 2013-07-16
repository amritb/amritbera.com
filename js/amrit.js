$(document).ready(function()
    {
        $('#H').click(function(){
		$.scrollTo(  '0px', 800 );
	});
        $('#about').click(function(){
		$.scrollTo(  '1250px', 800 );
	});
        $('#portfolio').click(function(){
		$.scrollTo(  '2750px', 800 );
	});
        $('#contact').click(function(){
		$.scrollTo(  '4580px', 800 );
	});
	
	
    //fixing ribbon in chrome and safari
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if(is_chrome){
        $('#left-fixed-menu').attr({'style':'left:121px;'})
    }
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if(is_safari){
        $('#left-fixed-menu').attr({'style':'left:121px;'})
    }

	
	
    });
