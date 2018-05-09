
function Counter(){
  this.count=1;
  this.inc=function(){
    this.count++;
    if (this.notify!=undefined&&this.notify!=null){
        this.notify(this.count);
      };
  };
  this.notify= null;
  this.setNotify=function(f){
    this.notify=f;
  };
}
console.log("problema13");
function DecreaseCounter(){
};
DecreaseCounter.prototype=new Counter();
o4=new DecreaseCounter();
o4.inc=function(){this.count--};
o4.count;
o4.inc();
o4.count;

