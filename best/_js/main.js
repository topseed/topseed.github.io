'use strict'
loadjs.ready(['polyfills', 'keyLibs'], {// loaded setup libs
	success: function(){
	loadjs([
		//'/_js/vendor/jquery.jsForm.min.js'
        '//cdn.jsdelivr.net/gsap/1.19.0/TweenMax.min.js'
        ,'//cdn.jsdelivr.net/gsap/1.19.0/jquery.gsap.min.js'
        ,'//cdn.jsdelivr.net/jquery.fullpage/2.8.9/jquery.fullpage.min.js'

		], { success: function(){
			libsLoaded()
		}
	})//loadjs
	}//suc
})

//========================================================
function libsLoaded(){
	
	TS.signalAppReady()

	/*TT.ScontentID = '#content-wrapper'
	TT.handle(function(evt) {
		if (TT.PRE == evt.typ)  {//start
			//$('#content-wrapper').fadeTo(100,.2)
		}
		if (TT.PAGE == evt.typ)  {//new pg loaded
			$(TT.ScontentID).html(evt.$new)
			//$('#content-wrapper').fadeTo(100,1)
		}
	})*/
}