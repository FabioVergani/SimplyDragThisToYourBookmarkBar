//noprotect
var o=console, log=o.log.bind(o), dir=o.dir.bind(o);
o.clear();
//===========================================
function iterate(from,fn,k){
 var a, b=from, e=b, f=fn, i=-1, z=null;
 if(k){f(e,i);};//include:root
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
			e=a;
		}else{
			e=a;
		};
	}else{
		e=a;
		i++;
	};
	f(e,i);
 };
};
//=======================================================================
var process=function(node,depth){var e=node,i=depth;log(e.id,i);};
iterate(document.body,process,true);
//END.
