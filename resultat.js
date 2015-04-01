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
var participant = 0;
var nbSam=0;
var img_tab = new Array();
var img = new Array();
var winner_url = new Array();

/*On recupere les parametres de l'URL*/
var parameters = location.search.substring(1).split("&");
	/*On récupère le nbr de participants et de sam*/
    var temp = parameters[0].split("=");
    participant = parseInt(temp[1]);
    temp = parameters[1].split("=");
    nbSam = parseInt(temp[1]);
    /*On récupère les url des photo*/
    for(p=2;p<=participant+1;p++){
    	temp = parameters[p].split("=");
    	img_tab[p-2] = unescape(temp[1]);	
    }

    /*On affecte les url aux sources des images du carousel*/
    for(i=1;i<=participant;i++){
        img[i-1] = document.getElementById("carou_"+i+"");
        img[i-1].src = img_tab[i-1]; 
    }

/*Partie de placement du fond*/
var f_left_pos = Math.round((diago-x)/2)+Math.round(x/40);
var f_top_pos = Math.round(((1.78 * diago)-y)/2)+Math.round(y/20);
var fond = document.getElementById("contenu");
fond.style.cssText="width:"+diago+"px;left:-"+f_left_pos+"px;top:-"+f_top_pos+"px;";

/*Partie de placement du cadre jaune*/
var cadre = document.getElementById("cadre");
cadre.style.cssText="width:"+Math.round(5*(x/6))+"px;height:"+Math.round(y-(x/6))+"px;left:"+(Math.round(x/12)-10)+"px;top:"+(Math.round(x/12)-10)+"px;";

var sam1 = document.getElementById("sam1");
var sam2 = document.getElementById("sam2");
var banniere_text =document.getElementById("banniere_text");

banniere_text.style.cssText = "font-size:"+Math.round(x*0.07)+"px;margin-top:"+Math.round(x/20)+"px;margin-left:"+Math.round((86*(13*y/100))/100)+"px;";

var carou = document.getElementById("carousel");

var container = document.getElementById("container");
container.style.cssText = "width:"+Math.round(4*x/6)+"px;height:"+Math.round(2*y/3)+"px;top:"+Math.round(y/6)+"px;left:"+Math.round(x/15)+"px;";
