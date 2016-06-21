'use strict'
define(function(require,exports,module){
	var C=require('common');
	
	exports.a2d=function(a){
		return a*180/Math.PI;	
	};
	
	exports.getPos=function(obj){
		var l=0;
		var t=0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;	
		}
		return{left:l,top:t}	
	};
	
	exports.hoverDir=function(obj,oEvent){
		var x =C.getPos(obj).left+obj.offsetWidth/2-oEvent.clientX;
		var y =C.getPos(obj).top+obj.offsetHeight/2-oEvent.clientY;
		return Math.round((C.a2d(Math.atan2(y,x))+180)/90)%4;	
	};
	
	exports.rnd=function(n,m){
		return parseInt(n+Math.random()*(m-n));	
	};
	
	exports.getStyle=function(obj,sName){
		return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
	};
	
	exports.startMove=function(obj,json,options){
		options=options||{};
		options.time = options.time||700;
		options.type = options.type||'ease-out';
		var start = {};
		var dis = {};
		for(var name in json){
			start[name] = parseFloat(C.getStyle(obj,name));
			if(isNaN(start[name])){
				switch(name){
					case 'top':
						start[name] = obj.offsetTop;
						break;
					case 'left':
						start[name] = obj.offsetLeft;
						break;
					case 'width':
						start[name] = obj.offsetWidth;
						break;
					case 'height':
						start[name] = obj.offsetHeight;
						break;
					case 'opacity':
						start[name] = 1;
						break;
					case 'borderWidth':
						start[name] = 0;
						break;
				}
			}
			dis[name] = json[name]-start[name];
		}
		var count = Math.floor(options.time/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			for(var name in json){
				switch(options.type){
					case 'linear':
						var cur = start[name]+dis[name]*n/count;
						break;
					case 'ease-in':
						var a = n/count;
						var cur = start[name]+dis[name]*Math.pow(a,3);
						break;
					case 'ease-out':
						var a = 1-n/count;
						var cur = start[name]+dis[name]*(1-Math.pow(a,3));
						break;
				}
				if(name=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity:'+cur*100+')';
				}else{
					obj.style[name] = cur+'px';
				}
			}
			if(n==count){
				clearInterval(obj.timer);
				options.end&&options.end();
			}
		},30);
	};
	
	exports.hoverGo=function(obj){
		var aA=obj.children[0];
		var oS=aA.children[0];
		obj.onmouseover=function(ev){
			var oEvent = ev||event;
			var oFrom = oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom))return;
			var dir = C.hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					oS.style.left = '300px';
					oS.style.top = 0;
					break;
				case 1:
					oS.style.left = 0;
					oS.style.top = '300px';
					break;
				case 2:
					oS.style.left = '-300px';
					oS.style.top = 0;
					break;
				case 3:
					oS.style.left = 0;
					oS.style.top = '-300px';
					break;
			}
			C.startMove(oS,{top:0,left:0});
		};
		obj.onmouseout=function(ev){
			var oEvent = ev||event;
			var oTo = oEvent.toElement||oEvent.relatedTarget;
			if(obj.contains(oTo))return;
			var dir = C.hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					C.startMove(oS,{left:300,top:0});
					break;
				case 1:
					C.startMove(oS,{left:0,top:300});
					break;
				case 2:
					C.startMove(oS,{left:-300,top:0});
					break;
				case 3:
					C.startMove(oS,{left:0,top:-300});
					break;
			}
		};	
	};
})