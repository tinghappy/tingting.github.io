'use strict'
define(function(require,exports,module){
	var B=require('common');
	exports.slide=function (id1,id2){
		var oDiv1=document.getElementById(id1);
		var oUl=oDiv1.children[0];
		var aLi = oUl.children;
		for(var i=0;i<aLi.length;i++){
			B.hoverGo(aLi[i]);
		}
		
		function Harvest(){
			var aPos = [];
			var oBtn=document.getElementById(id2);
			for(var i=0;i<aLi.length;i++){
				aPos.push({t:aLi[i].offsetTop,l:aLi[i].offsetLeft});
			}
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.left = aPos[i].l+'px';
				aLi[i].style.top = aPos[i].t+'px';
				aLi[i].style.position='absolute';
				aLi[i].style.margin=0;
			}
			
			var timer = null;
			var bOk = false;
			var bLeft=oUl.offsetWidth/2;
			var cTop=oUl.offsetHeight;
			oBtn.onclick=function(){
				if(bOk)return ;
				bOk=true;
				var i = 0;
				timer = setInterval(function(){
					(function(index){
						B.startMove(aLi[i],{left:bLeft,top:cTop,width:0,height:0,opacity:0},{end:function(){
							if(index==aLi.length-1){
								i = aLi.length-1;
								timer = setInterval(function(){
									(function(index){
										B.startMove(aLi[index],{left:aPos[index].l,top:aPos[index].t,width:230,height:200,opacity:1},{end:function(){
											if(index==0){
												bOk=false;
											}
										}});
									})(i);
									i--;
									if(i==-1){
										clearInterval(timer);
									}
								},100);
							}
						}});
					})(i);
					i++;
					if(i==aLi.length){
						clearInterval(timer);
					}
				},100);
			};	
			
		}
		Harvest();
	}
})