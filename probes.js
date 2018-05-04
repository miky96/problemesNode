console.log("problema10")
var o1={
  count : 0,
  inc : function(){
    this.count++;
    if (this.notify!=undefined&&this.notify!=null){
        this.notify(this.count);}; },
  notify : null
};
o1.notify=null;
o1.inc();
o1.count=1;
o1.notify = function(a) { console.log(a)};
o1.inc();
