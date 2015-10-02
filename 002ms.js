//noprotect
var o=console,log=o.log.bind(o),dir=o.dir.bind(o);o.clear();
//
function iterate(from){
 var a, b=from, e=b;
 log('start:',e);
 while(e){
	a=e.firstElementChild;
	if(a===null){
		a=e.nextElementSibling;
		if(a===null){

			do{
				e=e.parentNode;
				if(e===b){break;};
			}while((a=e.nextElementSibling)===null);
			e=a;

		}else{
			e=a;
		};
	}else{
		e=a;
	};
	log('node:',e);
 };
 log('end');
};
//
iterate(document.body);
//END.
