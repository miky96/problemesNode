console.log("problema11")
var o2 = (function() {
  var count = 0;
  var inc = function(){
    count++;
    if (this.notify!=undefined&&this.notify!=null){
        this.notify(count);
      };
    };
  var notify= null;
  function setNotify(f){
    this.notify=f;
  };
  return {
    inc:inc,
    setNotify:setNotify
  };
})();
o2.setNotify(function(a) { console.log(a)});
o2.inc();

