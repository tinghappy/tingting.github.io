'use strict'
seajs.config({
	alias:{
		'script':'slide'	
	}
});
seajs.use('script',function(mode){
	mode.slide('cont','btn')	
	
})