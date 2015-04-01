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
cadre.style.cssText="width:"+Math.round(5*(x/6))+"px;height:"+Math.round(9.3*(y/10)-(x/6))+"px;left:"+(Math.round(x/12)-10)+"px;top:"+(Math.round(x/12)-Math.round(x/40))+"px;";


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



/*Partie de placement du text nombre de participants*/
var nb_participants= document.getElementById("nbr_participants");
nb_participants.style.cssText="width:"+Math.round(5*(x/6))+"px;top:"+Math.round(y/20)+"px;";

/*Partie de placement du text nombre de sam*/
var nb_sam_img= document.getElementById("nbr_sam");
nb_sam_img.style.cssText="width:"+Math.round(5*(x/6))+"px;top:"+Math.round(y/2.6)+"px;";

/*Partie de placement du slider du nombre de participants*/
var slider= document.getElementById("slider");
slider.style.cssText="width:"+(Math.round(4*(x/6)))+"px;height:"+Math.round(y/15)+"px;left:"+Math.round(x/12)+"px;top:"+Math.round(y/9)+"px;";

/*Partie de placement du slider du nombre de participants*/
var slider2= document.getElementById("slider2");
slider2.style.cssText="width:"+(Math.round(4*(x/6)))+"px;height:"+Math.round(y/15)+"px;left:"+Math.round(x/12)+"px;top:"+Math.round(y/2.25)+"px;";

/*Initialisation des variables*/
var img_scoreboard_url = ["ressources/score_0.png","ressources/score_1.png","ressources/score_2.png","ressources/score_3.png","ressources/score_4.png","ressources/score_5.png","ressources/score_6.png","ressources/score_7.png","ressources/score_8.png","ressources/score_9.png"];
var nbParticipants=1;
var nbr_sam = 1;
var nbSam=0;



/*Partie de placement du tableau scoreboard*/
var array= document.getElementById("array");
array.style.cssText="width:"+Math.round(x/3)+"px;height:"+(Math.round(y/8))+"px;top:"+Math.round(y/5)+"px;left:"+Math.round(x/4.6)+"px;";

/*partie de redimension des image du scoreboard*/
var scor_imgdizaine = document.getElementById("dizaine");
var scor_imgunite = document.getElementById("unite");
scor_imgdizaine.style.cssText="width:"+Math.round(x/6)+"px;height:"+Math.round(y/8)+"px;";
scor_imgunite.style.cssText="width:"+Math.round(x/6)+"px;height:"+Math.round(y/8)+"px;";

/*Partie de placement du tableau car*/
var array_car= document.getElementById("array_car");
array_car.style.cssText="width:"+Math.round(4*x/6)+"px;height:"+(Math.round(y/4))+"px;top:"+Math.round(y/1.9)+"px;left:"+Math.round(x/15)+"px;";
for(i=0;i<8;i++){
  document.getElementById("car_"+i).style.cssText="width:"+Math.round(x/6)+"px;";
}

/* Partie de placement du bouton Continuer*/
var continuer = document.getElementById("continuer");
var continuer_left_pos = x-10-Math.round(x/12)-Math.round(5*x/12);
var continuer_top_pos = y-Math.round(x/10)-Math.round(y/20);
var taille_x = Math.round(5*x/12);
var taille_y = Math.round(y/15);
continuer.style.cssText="width:"+taille_x+"px;height:"+taille_y+"px;left:"+continuer_left_pos+"px;top:"+continuer_top_pos+"px;";
/*code du texte contenu dans le bouton début*/
var debut_text = document.getElementById("continuer_text");
var taille_font = Math.round(x*0.07);
debut_text.style.cssText="font-size:"+ taille_font +"px;height:"+ taille_y +"px;width:"+taille_x+"px;line-height:"+taille_y+"px;";

continuer.addEventListener('touchstart',function(){
  if(nbParticipants>1 && nbSam>0){
        // preppare and load ad resource in background, e.g. at begining of game level
    if(AdMob){ 
        AdMob.removeBanner();
    } 
    else{
    }
        // show the interstitial later, e.g. at end of game level
    window.location = "camera.html?participant="+nbParticipants+"&sam="+nbSam;
  }
  else{
    alert("Veuillez choisir au moins 2 participants et 1 sam!");
  }
},false)


$(document).ready(function() {
  
  $("#slider").slider({
 
  orientation: "horizontal",
  range: "min",
  min: 1,
  max: 20,
  value: 1,
  slide: function(event, ui) {
      nbParticipants=ui.value;
      $("#slider .ui-slider-range").css("width",Math.round(4*(x/6)));
      $("#slider .ui-slider-range").css("height",Math.round(y/15));
      scor_imgdizaine.src=img_scoreboard_url[Math.floor(nbParticipants/10)];
      scor_imgunite.src=img_scoreboard_url[nbParticipants%10];
      if(nbParticipants>8){
        nbr_sam = 8;
      }
      else if(nbParticipants==1){
        nbr_sam=1;
      }
      else{
        nbr_sam = nbParticipants-1;
      }
      $( "#slider2" ).slider( "option", "max", nbr_sam );
      if(nbSam>nbr_sam){
        nbSam=nbr_sam;
      }
       for(i=0;i<8;i++){
        if(i<nbSam){
          document.getElementById("car_"+i).style.cssText="visibility:visible;width:"+Math.round(x/6)+"px;";
        }
        else{
           document.getElementById("car_"+i).style.cssText="visibility:hidden;width:"+Math.round(x/6)+"px;";
        }
      }
  }
     
});
 
      $("#slider .ui-slider-handle").css("width",Math.round(y/12));
      $("#slider .ui-slider-handle").css("height",Math.round(y/12));
      $("#slider .ui-slider-handle").css("margin-left",-Math.round(y/24));
      $("#slider .ui-slider-handle").css("margin-top",-Math.round(y/90));
});


$(document).ready(function() {
  
  $("#slider2").slider({
 
  orientation: "horizontal",
  range: "min",
  min: 0,
  max: nbr_sam,
  value: 0,
  slide: function(event, ui) {
      nbSam=ui.value;
      $("#slider2 .ui-slider-range").css("width",Math.round(4*(x/6)));
      $("#slider2 .ui-slider-range").css("height",Math.round(y/15));
      for(i=0;i<8;i++){
        if(i<nbSam){
          document.getElementById("car_"+i).style.cssText="visibility:visible;width:"+Math.round(x/6)+"px;";
        }
        else{
           document.getElementById("car_"+i).style.cssText="visibility:hidden;width:"+Math.round(x/6)+"px;";
        }
      }
  }
     
});
      $("#slider2 .ui-slider-handle").css("width",Math.round(y/12));
      $("#slider2 .ui-slider-handle").css("height",Math.round(y/12));
      $("#slider2 .ui-slider-handle").css("margin-left",-Math.round(y/24));
      $("#slider2 .ui-slider-handle").css("margin-top",-Math.round(y/90));
});



