console.log("problema12");
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
o3=new Counter();
o3.setNotify(function(a) { console.log(a)});
o3.inc();

