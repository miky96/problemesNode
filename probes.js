console.log("problema11")
var pattern = (function() {
  var obj = {};
  obj.count = 0;
  obj.inc = function(){
    this.count++;
    if (this.notify!=undefined&&this.notify!=null){
        this.notify(this.count)
      };
    };
  obj.notify = null;
  function setNotify(){
    obj.notify=f
  };
  return {
    o2:obj,
    setNoti:function(f){

    };
  };
})();
o2.notify=null;
o2.inc();
o2.count=1;
o2.setNotify(function(a) { console.log(a)});
o2.inc();
