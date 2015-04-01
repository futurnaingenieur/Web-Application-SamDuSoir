
/* On prend les dimensions de l'écran */
var x = (window.innerWidth)+1;
var y = (window.innerHeight)+1;
 if(window.orientation == 90 || window.orientation==-90){
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



/*Partie de placement du Sam*/
var sam = document.getElementById("sam");
var s_left_pos = 0-Math.round(x/50);
var s_top_pos = 0-Math.round(y/16);
sam.style.cssText="width:"+x+"px;height:"+y+"px;left:"+s_left_pos+"px;top:"+s_top_pos+"px;";



/*Partie de placement du Titre*/
var samDuSoir = document.getElementById("samDuSoir");
var samDu_left_pos = Math.round(x/5) - Math.round(x/50) -5;
var samDu_top_pos = Math.round(y/5) -Math.round(y/16);
var taille_x_Sam = Math.round(x/1.5);
var taille_y_Sam= Math.round(y/10);
samDuSoir.style.cssText="width:"+taille_x_Sam+"px;height:"+taille_y_Sam+"px;left:"+samDu_left_pos+"px;top:"+samDu_top_pos+"px;";
/*code du texte contenu dans le titre*/
var samDuSoir_text = document.getElementById("samDuSoir_text");
var taille_font = Math.round(x*0.17);
samDuSoir_text.style.cssText="font-size:"+ taille_font +"px;height:"+ taille_y_Sam +"px;width:"+taille_x_Sam+"px;line-height:"+taille_y_Sam+"px;";


/* Partie de placement du bouton Début*/
var debut = document.getElementById("debut");
var debut_left_pos = 0 + Math.round(x/4) - Math.round(x/50) -5;
var debut_top_pos = 0 + 3 * Math.round(y/4) -Math.round(y/16);
var taille_x = Math.round(x/2);
var taille_y = Math.round(y/10);
debut.style.cssText="width:"+taille_x+"px;height:"+taille_y+"px;left:"+debut_left_pos+"px;top:"+debut_top_pos+"px;";
/*code du texte contenu dans le bouton début*/
var debut_text = document.getElementById("debut_text");
var taille_font = Math.round(x*0.07);
debut_text.style.cssText="font-size:"+ taille_font +"px;height:"+ taille_y +"px;width:"+taille_x+"px;line-height:"+taille_y+"px;";



/* Partie de placement du bouton propos */
var propos = document.getElementById("propos");
var propos_left_pos = x-Math.round(x/10)-30;
var propos_top_pos = y-Math.round(x/10)-Math.round(y/20);
propos.style.cssText="width:"+Math.round(x/10)+"px;height:"+Math.round(x/10)+"px;left:"+ propos_left_pos +"px;top:"+ propos_top_pos +"px;";
/*code du texte contenu dans le bouton propos*/
var propos_text = document.getElementById("propos_text");
propos_text.style.cssText="font-size:"+ taille_font +"px;line-height:"+ Math.round(x/10) +"px;height:"+Math.round(x/10)+"px;";


/*Lien entre début et la page début*/
debut.addEventListener('touchstart',function(){
	window.location = "choix.html";
},false);

propos.addEventListener('touchstart',function(){
	 AdMob.removeBanner();
	window.location = "propos.html";
},false);

