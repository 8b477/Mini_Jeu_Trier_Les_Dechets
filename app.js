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
    img0 = ["images/déchetIndustriel.png"],
    img1 = ["images/déchetMénage.png"],
    img2 = ["images/déchetToxic.png"],
    img3 = ["images/dechetsVege.jpg"],
    ]
// tenter de stocker une valeur de tableu dans une poubelle

garbageYellow = detritus[0][0];





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

//faire en sorte de pouvoir bouger le déchet qui a pop grace au clic sur les coté

window.addEventListener('mouseup', function (e){
    if(e.target.id === newImg.id){
        newImg.style.position = 'absolute';
        newImg.style.top = e.pageY + "px";
        newImg.style.left = e.pageX + "px";
        newImg.style.transform = "translate(-50%, -50%)";
    }
})

// comparé si le déchet est au bonne endroit avc l'event du btnValide

btnValide.addEventListener('click', function (e){
    if (newImg === newImg){
        console.log("ok")
    }
    else{
        console.log("pas ok")
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