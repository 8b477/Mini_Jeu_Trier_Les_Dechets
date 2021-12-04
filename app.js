let garbageYellow = document.getElementById('garbageYellow');
let garbageGreen  = document.getElementById('garbageGreen');
let garbageBlue = document.getElementById('garbageBlue');
let garbagehMaron = document.getElementById('garbageMaron');
let allTrash = document.querySelectorAll('.trash');

let pop = document.getElementById('pop');
let btnGo = document.getElementById('go');
let btnValide = document.getElementById('valide');

//table with detritus picture
const detritus = [
    img0 = ["http://localhost:63342/Projet-Serious-game-tri-s-lectif/images/d%C3%A9chetIndustriel.png"],
    img1 = ["http://localhost:63342/Projet-Serious-game-tri-s-lectif/images/d%C3%A9chetM%C3%A9nage.png"],
    img2 = ["http://localhost:63342/Projet-Serious-game-tri-s-lectif/images/d%C3%A9chetToxic.png"],
    img3 = ["http://localhost:63342/Projet-Serious-game-tri-s-lectif/images/dechetsVege.jpg"],
    ]
// create table

garbageYellow = [];
garbageGreen = [];
garbageBlue = [];
garbagehMaron = [];


let newImg = document.createElement('img');

//invok function create detritus

btnGo.addEventListener('click', function (){
    let randy = Math.floor(Math.random() * detritus.length);
    pop.appendChild(newImg);
    newImg.src = detritus[randy];
    newImg.style.height = "180px";
    newImg.style.width = "160px";
    newImg.id = randy;
    console.log(newImg)
})

// comparé si le déchet est au bonne endroit avc l'event du btnValide

btnValide.addEventListener('click', function (e){
    if (garbageYellow.length < 1){
        garbageYellow.push(newImg.src);

        if(garbageYellow.includes(detritus[0][0]) === true){

           alert("win poubelle jaune")
        }
        else{
            alert("Loose");
        }
    }
    else if(garbageGreen.length < 1){
        garbageGreen.push(newImg.src);


        if(garbageGreen.includes(detritus[1][0] === true)){
            alert("poubelle verte win")
        }
        else{
            alert("Loose");
        }
    }
    else if(garbageBlue.length < 1){
        garbageBlue.push(newImg.src);


        if(garbageBlue.includes(detritus[2][0] === true)){
            alert("poubelle bleu win")
        }
        else{
            alert("Loose");
        }
    }
    else if(garbagehMaron.length < 1){
        garbagehMaron.push(newImg.src);


        if(garbagehMaron.includes(detritus[3][0] === true)){
            alert("poubelle maron win")
        }
        else{
            alert("Loose");
        }
    }
})

//insert event for drag my picture

for(const clean of allTrash){
    clean.addEventListener('dragover', function (e){
        e.preventDefault();
    })

    clean.addEventListener('dragenter', function (e){
        e.preventDefault();
    })

    clean.addEventListener('dragleave', function (){
    })

    clean.addEventListener('drop', function (){
        this.append(newImg);
    })
}


//faire en sorte de pouvoir bouger le déchet qui a pop grace au clic sur les coté
/*

window.addEventListener('mouseup', function (e){
    if(e.target.id === newImg.id){
        newImg.style.position = 'absolute';
        newImg.style.top = e.pageY + "px";
        newImg.style.left = e.pageX + "px";
        newImg.style.transform = "translate(-50%, -50%)";
    }
})

 */