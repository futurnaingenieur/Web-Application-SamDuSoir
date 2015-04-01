
/*
		We take the parameter in the url in order to know how many
                        pictures we need to take.
*/

var x = (window.innerWidth)+1;
var y = (window.innerHeight)+1;
var i=1;
var t=1;
var participant = 0;
var nbSam=0;
var parameters = location.search.substring(1).split("&");
    /*On récupère le nbr de participants*/
    var temp = parameters[0].split("=");
    participant = parseInt(temp[1]);
    temp = parameters[1].split("=");
    nbSam = parseInt(temp[1]);
/* Positioning the button */
var retry = document.getElementById("retry");
var download = document.getElementById("download");
var next = document.getElementById("next");
var retry_text = document.getElementById("retry_text");
var download_text = document.getElementById("download_text");
var next_text = document.getElementById("next_text");





/*  We build an array which will contain object composed by an url corresponding 
    to the path of the picture and an integer (0 or 1) which is equal to 1 if the
    user ask to download the picture after taken it.
*/
var img_tab = new Array();
function img (url) {
    this.url = url;
}

var image = document.getElementById("photo");
image.style.cssText = "height:"+y+"px;width:"+x+"px;";

var affichage = document.getElementById("affichage");


var affichage_text = document.getElementById("affichage_text");
affichage_text.style.cssText = "font-size:"+Math.round(x/8)+"px;height:"+ Math.round(y/6)+"px;line-height:"+Math.round(y/6)+"px;";
affichage_text.innerHTML = "Participant "+i+"";

/*If the picture is taken succesfully, we change the src of the img in the html code
  and we add the path of this picture in the array with a 0 parameter because for the
  moment the user doesn't ask to download it in his library.  
*/

/* if the user is satisfied by it's picture, he push the button next which will
    increment i and allow to take the second picture.
*/





function movePic(file){ 
    window.resolveLocalFileSystemURI(file, resolveOnSuccess, resOnError); 
} 






//Callback function when the file system uri has been resolved
function resolveOnSuccess(entry){ 
    var d = new Date();
    var n = d.getTime();
    //new file name
    var newFileName = n + ".jpg";
    var myFolderApp = "SamDuSoir";

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
    //The folder is created if doesn't exist
    fileSys.root.getDirectory( myFolderApp,
                    {create:true, exclusive: false},
                    function(directory) {
                        entry.copyTo(directory, newFileName,  successMove, resOnError);
                    },
                    resOnError);
                    },
    resOnError);
}

//Callback function when the file has been moved successfully - inserting the complete path
function successMove(entry) {
    //Store imagepath in session for future use
    //like to store it in database
    sessionStorage.setItem('imagepath', entry.fullPath);
   
}

function resOnError(error) {
    alert(error.code);
}











next.addEventListener('touchstart',function(){
    if(i<participant){
        i++;
        if(!navigator.camera){
            p++;
             affichage_text.innerHTML = "Participant "+i+"";
        }
        else{
            alert("Participant "+i+", c'est à vous!");
            capturePhoto();
            affichage_text.innerHTML = "Participant "+i+"";
        }
    }
    else{
        
        var chaine = "";

        /*Morceaux qui remplit avec portraits test pour test sur pc*/
      /* 
        for(k=0;k<participant-1;k++){
            chaine += "nbr=ressources/candid_"+(k+1)+".jpg&";
        }
         chaine+="nbr=ressources/candid_"+participant+".jpg";
       
        window.location = "resultat.html?participant="+participant+"&sam="+nbSam+"&"+chaine;
  */
            for(k=0;k<(participant-1);k++){
            chaine += "nbr="+img_tab[k].url+"&";
        }
        
        chaine+="nbr="+img_tab[participant-1].url+""; 
        window.location = "resultat.html?participant="+participant+"&sam="+nbSam+"&"+chaine;
    
    }
},false);

/* If the user decides to download the picture in his phone, we change the integer to 1 
   in order to know later that we need to keep this picture in the user library.
*/





download.addEventListener('touchstart',function(){
     alert("image téléchargée dans la galerie"); 
     movePic(image.src);
     /*
     img_tab[p].url = image.src;*/
},false);



/*if he chooses to retry the picture, we just launch a new getPicture without incrementing i */
retry.addEventListener('click',function(){
            capturePhoto(); 
},false);

