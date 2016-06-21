// JavaScript Document

function faqshow(n){
	
	if(n=="1"){
		
		document.getElementById("q1").className = "question click";
		document.getElementById("q2").className = "question";
		document.getElementById("q3").className = "question";
		document.getElementById("q4").className = "question";
		document.getElementById("q5").className = "question";
		document.getElementById("q6").className = "question";
		document.getElementById("q7").className = "question";
		document.getElementById("q8").className = "question";
		
		document.getElementById("a1").className = "answer curr";
		document.getElementById("a2").className = "answer";
		document.getElementById("a3").className = "answer";
		document.getElementById("a4").className = "answer";
		document.getElementById("a5").className = "answer";
		document.getElementById("a6").className = "answer";
		document.getElementById("a7").className = "answer";
		document.getElementById("a8").className = "answer";
		}
		
	else if(n=="2"){
		
		document.getElementById("q1").className = "question";
		document.getElementById("q2").className = "question click";
		document.getElementById("q3").className = "question";
		document.getElementById("q4").className = "question";
		document.getElementById("q5").className = "question";
		document.getElementById("q6").className = "question";
		document.getElementById("q7").className = "question";
		document.getElementById("q8").className = "question";
		
		document.getElementById("a1").className = null;
		document.getElementById("a2").className = "answer curr";
		document.getElementById("a3").className = null;
		document.getElementById("a4").className = null;
		document.getElementById("a5").className = null;
		document.getElementById("a6").className = null;
		document.getElementById("a7").className = null;
		document.getElementById("a8").className = null;
		
		}
	
	
	
	
	
	
	}