//noprotect
var o=console,log=o.log.bind(o),dir=o.dir.bind(o);o.clear();
//
function iterate(from){
 var m, start=from, e=start;
 log('start:',e);
 while(e){
	if(e.children.length===0){
		if(e.nextElementSibling){
			e=e.nextElementSibling;
		}else{
			do{
				e=e.parentNode;
				if(e===start){break;};
			}while(!e.nextElementSibling);
			e=e.nextElementSibling;
		};
	}else{
		e=e.firstElementChild;
	};
	 log('node:',e);
 };
 log('end');
};
//
iterate(document.body);
//END.
