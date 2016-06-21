// JavaScript Document
/*var tabT = document.getElementById("subNavT").children;
var tabC = document.getElementById("subNavC").children;
for(i=0;i<tabT.length;i++){	
	tabT[i].index = i;
	tabT[i].onmouseover = function(){	
		for(j=0;j<tabT.length;j++){
			tabC[j].style.display = 'none';
		}
		tabC[this.index].style.display = 'block';
		}
	}*/
/*function addTab(n){
	if(n=="1"){
		document.getElementById("li1").className="subNav_curr";
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="curr subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="2"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className="subNav_curr";
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="curr subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="3"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className="subNav_curr";
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="curr subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="4"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className="subNav_curr";
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="curr subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="5"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className="subNav_curr";
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="curr subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="6"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className="subNav_curr";
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="curr subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="7"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className="subNav_curr";
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="curr subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="8"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className="subNav_curr";
		document.getElementById("li9").className=null;
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="curr subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="9"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className="subNav_curr";
		document.getElementById("li10").className=null;
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="curr subNav2";
		document.getElementById("tab10").className="subNav2";
		}
	else if(n=="10"){
		document.getElementById("li1").className=null;
		document.getElementById("li2").className=null;
		document.getElementById("li3").className=null;
		document.getElementById("li4").className=null;
		document.getElementById("li5").className=null;
		document.getElementById("li6").className=null;
		document.getElementById("li7").className=null;
		document.getElementById("li8").className=null;
		document.getElementById("li9").className=null;
		document.getElementById("li10").className="subNav_curr";
	
		document.getElementById("tab1").className="subNav2";
		document.getElementById("tab2").className="subNav2";
		document.getElementById("tab3").className="subNav2";
		document.getElementById("tab4").className="subNav2";
		document.getElementById("tab5").className="subNav2";
		document.getElementById("tab6").className="subNav2";
		document.getElementById("tab7").className="subNav2";
		document.getElementById("tab8").className="subNav2";
		document.getElementById("tab9").className="subNav2";
		document.getElementById("tab10").className="curr subNav2";
		}
	}*/