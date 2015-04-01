/* On prend les dimensions de l'écran */

var x = (window.innerWidth)+1;
var y = (window.innerHeight)+1;

 if(x>y){
    var temp = x;
    x=y;
    y=temp;
  }
var rapport = Math.round(x/y);
var diago = Math.round(Math.sqrt((x*x)+(y*y)))+(rapport*1000);
var img_winner = new Array(); 
var img = new Array();
var winner=0;

/*Partie de placement du fond*/


var f_left_pos = Math.round((diago-x)/2)+Math.round(x/40);
var f_top_pos = Math.round(((1.78 * diago)-y)/2)+Math.round(y/20);
var fond = document.getElementById("contenu");
fond.style.cssText="width:"+(diago)+"px;left:-"+(f_left_pos)+"px;top:-"+f_top_pos+"px;";
/*Partie de placement du cadre jaune*/
var cadre = document.getElementById("cadre");
cadre.style.cssText="width:"+Math.round(5*(x/6))+"px;height:"+Math.round(8*(y/10))+"px;left:"+(Math.round(x/12)-5)+"px;top:"+(Math.round(x/12)-5)+"px;";


/*Placement du bouton accueil*/
var accueil = document.getElementById("accueil");
var continuer_left_pos = Math.round(x/12);
var continuer_top_pos = y-Math.round(y/8);
var taille_x = Math.round(3*x/12);
var taille_y = Math.round(x/10);
accueil.style.cssText="width:"+taille_x+"px;height:"+taille_y+"px;left:"+continuer_left_pos+"px;top:"+continuer_top_pos+"px;";

var accueil_text = document.getElementById("accueil_text");
var taille_font = Math.round(x*0.07);
accueil_text.style.cssText="font-size:"+ taille_font +"px;height:"+ taille_y +"px;width:"+taille_x+"px;line-height:"+taille_y+"px;";

/*Placement du bouton facebook*/
var fb = document.getElementById("fb");
var fb_left_pos = x-Math.round(x/2);
var fb_top_pos = y-Math.round(y/8);
var taile_x = Math.round(5*x/12);
var taile_y = Math.round(x/10);
fb.style.cssText="width:"+taile_x+"px;height:"+taile_y+"px;left:"+fb_left_pos+"px;top:"+fb_top_pos+"px;";

var img_fb = document.getElementById("img_fb");
img_fb.style.cssText="height:"+ taile_y +"px;width:"+taile_x+"px;";


accueil.addEventListener('touchstart',function(){
  window.location = "index.html";
},false)

/*On recupere les parametres de l'URL*/
  var parameters = location.search.substring(1).split("&");
  /*On récupère le nbr de participants et de sam*/
    var temp = parameters[0].split("=");
    winner = parseInt(temp[1]);
    temp = parameters[1].split("=");
    /*On récupère les url des photo*/
    for(p=1;p<=winner;p++){
      temp = parameters[p].split("=");
      img_winner[p-1] = unescape(temp[1]);
    }


fb.addEventListener('touchstart',function(){
   window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint('Ce soir on sait qui roule! Merci SamDuSoir(https://www.facebook.com/SamDuSoir?fref=ts)!', img_winner, 'https://www.facebook.com/SamDuSoir', 'Colle le texte pour nous soutenir!', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
},false)

