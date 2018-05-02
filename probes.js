var o1={
  counter:function(a){
    var contador=0; 
    contador+=a;
    if (this.notify!=undefined||this.notify!=null){
    	return this.notify();
    } }, 
  inc:function(){this.counter(1)},
  notify : null
};
o1.notify=null;
o1.inc();
o1.notify = function(a) { console.log(a)};
o1.notify;