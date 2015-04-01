/* On prend les dimensions de l'écran */

var x = (window.innerWidth)+1;
var y = (window.innerHeight)+1;

 if(x>y){
    var temp = x;
    x=y;
    y=temp;
  }
var rapport = x/y;
var diago = Math.round(Math.sqrt((x*x)+(y*y)))+(rapport*1000);


/*Partie de placement du fond*/
var f_left_pos = Math.round((diago-x)/2)+Math.round(x/40);
var f_top_pos = Math.round(((1.78 * diago)-y)/2)+Math.round(y/20);
var fond = document.getElementById("contenu");
fond.style.cssText="width:"+diago+"px;left:-"+f_left_pos+"px;top:-"+f_top_pos+"px;";
/*Partie de placement du cadre jaune*/
var cadre = document.getElementById("cadre");
cadre.style.cssText="width:"+Math.round(5*(x/6))+"px;height:"+Math.round(9*(y/10)-(x/6))+"px;left:"+(Math.round(x/12)-10)+"px;top:"+(Math.round(x/12)-Math.round(x/40))+"px;";
/*Partie de placement du text du cadre jaune*/
var cadre = document.getElementById("cadre_text");
cadre_text.style.cssText="font-size:"+(x*0.030)+"px;"
/*Partie de placement du Bouton Paypal*/
var paypal =  [document.getElementById("paypal1"),document.getElementById("paypal2"),document.getElementById("paypal3"),document.getElementById("paypal4")];
for(var i=0;i<4;i++){
	paypal[i].style.cssText="width:"+Math.round(x/3)+"px;left:"+Math.round(1*(x/3))+"px;top:"+Math.round(9*(y/10))+"px;";
}

/*Partie de placement du bouton retour*/
var back = document.getElementById("back");
var back_left_pos = Math.round(x/10)-Math.round(x/40);
var back_top_pos = y-Math.round(x/10)-Math.round(y/20);
back.style.cssText="width:"+Math.round(x/10)+"px;height:"+Math.round(x/10)+"px;left:"+ back_left_pos +"px;top:"+ back_top_pos +"px;";
var back_arrow = document.getElementById("back_arrow");
back_arrow.style.cssText="width:"+Math.round(x/10)+"px;height:"+Math.round(x/10)+"px;left:"+ back_left_pos +"px;top:"+ back_top_pos +"px;";
back.addEventListener('touchstart',function(){
  window.location = "index.html";
},false)


/*Partie de placement du bouton facebook*/
var fb_jaime = document.getElementById("fb_jaime");
var fb_left_pos = (8*Math.round(x/10))-Math.round(x/40);
var fb_top_pos = y-Math.round(x/8)-Math.round(y/20);
fb_jaime.style.cssText="width:"+Math.round(x/7)+"px;height:"+Math.round(x/7)+"px;left:"+fb_left_pos +"px;top:"+ fb_top_pos +"px;";

fb_jaime.addEventListener('touchstart',function(){
	window.open('https://www.facebook.com/SamDuSoir','_blank');
},false);
