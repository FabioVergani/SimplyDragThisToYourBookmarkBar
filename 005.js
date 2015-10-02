//noprotect
var o=console, log=o.log.bind(o), dir=o.dir.bind(o);
o.clear();
//=======================================================
function itera(c,g){
 var a, b=c, e=b, f=g, j=0, i=-1, z=null;
 f(e,i,j);
 while(e){
	a=e.firstElementChild;
	if(a===z){
		a=e.nextElementSibling;
		if(a===z){

			do{
				e=e.parentNode;
				if(e===b){break;};
				i--;
				a=e.nextElementSibling;
			}while(a===z);
		
		};
	
	}else{
		i++;
	};
	e=a;
	f(e,i,j);
 };
};
//=======================================================================
var domPath=[], process=function(node,depth,nth){
	var e=node,i=depth,j=nth;log(i,e.id,'nth:'+j);
};
itera(document.body,process,true);
//END.
