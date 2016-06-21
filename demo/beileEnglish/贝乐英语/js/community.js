// JavaScript Document

function communityTab(n){
	
	if(n=="1"){
		
		document.getElementById('tit1').className = "community_curr";
		document.getElementById('tit2').className = null;
		
		document.getElementById('con1').className = "curr";
		document.getElementById('con2').className = null;
		
		}
	else if(n=="2"){
		
		document.getElementById('tit1').className = null;
		document.getElementById('tit2').className = "community_curr";
		
		document.getElementById('con1').className = null;
		document.getElementById('con2').className = "curr";
		
		}
	
	}