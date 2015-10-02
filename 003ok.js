//noprotect
var o=console, log=o.log.bind(o), dir=o.dir.bind(o);
o.clear();
//========================
function iterate(from){
 var a, b=from, e=b, i=-1;
 //log('start:',e);
 while(e){
	a=e.firstElementChild;
	if(a===null){
		a=e.nextElementSibling;
		if(a===null){
			do{
				e=e.parentNode;
				if(e===b){break;};
				i--;
				a=e.nextElementSibling;
			}while(a===null);
			e=a;
		}else{
			e=a;
		};
	}else{
		e=a;
		i++;
	};
	//log(e.id,i);
 };
 //log('end');
};
//
iterate(document.body);
//END.
