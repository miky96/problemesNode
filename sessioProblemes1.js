//problema1
//surt un undefined ja que no te un return el 3 que surt es pel console.log
function f1(a) {
    console.log(a);
};
f1(3);
//problema2
//
function f2(a) {
//return a>= 0 ? 2*a : -1
  if (a>=0) {
    return 2*a;
  } else {
    return -1;
  }
}
console.log(f2(-4));
console.log(f2(2));
//problema3
//
llista=[1,2,3,4];
function f3(llista){
  f3_1=function(x) {
    return f2(x)+23;
  };
  return llista.map(f3_1)
  //tambe es pot fer return llista.map(function(x){return f2(x)+23})
}
llista2=f3(llista);
console.log(llista2);

//problema4
console.printaki = function() { console.log("Aqui");};
console.printaki();

//problema5
function f4(a,b){
  return a+b;
};
function f4_1(x){
  return f4(23,x);
};
llistaA=[1,2,3,4];
llistaB=llistaA.map(f4_1)
//les variables que nomes es fan servir en un lloc es poden substituir pel seu contingut
//llistaB=llistaA.map(function(x){return f4(23,x)});
console.log(llistaB);
//problema6
//fes b(a) i quan acabis crida c amb el resultat
function f5(a,b,c){
  return c(b(a));
};
console.log(f5(1, f2, function(r){ console.log(r)}));

//problema7
//si es fica y=x() y sera una funcio amb aqui0 el primer cop, aqui1 al segon
//aixo es una clausura ja que la funció on es defineix printaki2 deixa
//cal ficar uns parentessis perque si no falla i cal ficar uns parentessis
//darrere perque s'executi la funcio i passi a la segona
console.printaki2 = (function(){
  var y=0;
  return function() {
    console.log('aqui' + y++)};
  })();
console.printaki2();
console.printaki2();

//problema8
//els callbacks son els ultims en executarse, els callbacks no asseguren cap ordre ja que dependrà
//del tamany del fitxer
// sempre s'executara abans b que a. en la funcio callback "i" ja serà el tamany llista.lentgh
/*f6 = function(llista,callback_final){
	var nova_llista=[];
  var i;
	fs= require('fs');
	for (i = 0; i < llista.length; i++) {
    guardar_generic = function(a) {
      var _a=a;
      var f = function()

    }
    var callback = guardar_generic(i){
      nova_llista[i]=result;
      //a
    }
		fs.readFileSync(llista[i]);
	}
  b;
  i =llista.length;
	return nova_llista;
}
*/
//solucio Exercici 8
f6 = function(llista,callback_final){
	var nova_llista=[];
  var i;
  var count = 0;
	fs= require('fs');
  //tambe pots fer: pero no ho entenc aixi que fer l'altra
  //llista.forach(function(element,i){
  // var i =
  //var callback = function(err,result){ nova_llista[i]=result}...
//})
	for (i = 0; i < llista.length; i++) {
    guardar_generic = function(a) {
      var variable_int=a;
      //variable_int anira iterant segons el moment del for que sigui
      return function(err, result){
        nova_llista[variable_int]=result;
        //unic lloc on nova_llista està plena pero no es pot ficar el callback final aqui per tant cal ficar un contador
        //per assegurar-nos que nomes es crida quan s'han fet tots els callbacks
        if(++count==llista.length){
          callback_final(nova_llista);
        }
      }
    }
    //tenim la funció del return del guardar_generic i la i s'anirà incrementant segons l'iteració
    var callback = guardar_generic(i);
		fs.readFile(llista[i],callback);
	}
  return nova_llista;
}
//f6(['a1.txt,a2.txt'],function (result){ console.log(result) })

//problema9 ??
//es el mateix que el 8 on fs.redFile es funcio, el async map fa un map de la funció
//asyncMap =function(llista,funcio,callback_final)
//f7=asyncMap(llista,f,callbackfinal);



//problema10
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
