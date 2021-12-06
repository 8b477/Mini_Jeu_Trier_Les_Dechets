let garbageYellow = document.getElementById('garbageYellow');
let btnYellow = document.getElementById('btnGarbageYellow');

let garbageGreen  = document.getElementById('garbageGreen');
let btnGreen = document.getElementById('btnGarbageGreen');

let garbageBlue = document.getElementById('garbageBlue');
let btnBlue = document.getElementById('btnGarbageBlue');

let garbageMaron = document.getElementById('garbageMaron');
let btnMaron = document.getElementById('btnGarbageMaron');

let allTrash = document.querySelectorAll('.trash');

let pop = document.getElementById('pop');
let btnGo = document.getElementById('go');

let spanWin = document.getElementById('countWin');
let spanLoose = document.getElementById('countLoose');

//create let for insert responses
let answerd = document.getElementById('responce');

//get my image
let newImg = document.createElement('img');

// count initial
let countWin = 0;
let countLoose = 5;

//table with detritus picture
const detritus = [
    img0 = ["./images/bière.png"],
    img1 = ["./images/bocal.jpg"],
    img2 = ["./images/bouteilleDeLait.jpg"],
    img3 = ["./images/cannette.jpg"],
    img4 = ["./images/couche.jpg"],
    img5 = ["./images/gelDouche.jpg"],
    img6 = ["./images/journaux.jpg"],
    img7 = ["./images/magasine.jpg"],
    img8 = ["./images/yaourt.jpg"],
    ]

// create table
garbageYellow = [];
garbageGreen = [];
garbageBlue = [];
garbageMaron = [];


//invokes function create detritus

btnGo.addEventListener('click', function (){
    let randy = Math.floor(Math.random() * detritus.length);
    pop.appendChild(newImg);
    newImg.src = detritus[randy];
    newImg.style.height = "140px";
    newImg.style.width = "100px";
    reset();
})

//reset
function reset(){
    let randy = Math.floor(Math.random() * detritus.length);
    pop.appendChild(newImg);
    newImg.src = detritus[randy][0];
    newImg.style.height = "140px";
    newImg.style.width = "100px";
    garbageYellow = [];
    garbageGreen = [];
    garbageBlue = [];
    garbageMaron = [];
    newImg.style.left = "";
    newImg.style.top = "";
    newImg.style.opacity = "";
}

// compare if the waste is in the right place Yellow garbage

btnYellow.addEventListener('click', function (){
    if (garbageYellow.length < 1){
        garbageYellow.push(newImg.src);
        answerd.innerHTML = "";
        if(garbageYellow[0].slice(-12) === "cannette.jpg"
            || garbageYellow[0].slice(-19) === "bouteilleDeLait.jpg"
            || garbageYellow[0].slice(-13) === "gelDouche.jpg"){

           alert("win poubelle jaune + 1point !!")
            countWin++;
            spanWin.innerHTML = "Score " + countWin;
            reset();
            if(countWin == 5){
                alert("Tu as gagné !");
                answerd.innerHTML = "Tu as gagné !";
            }
        }
        else{
            answerd.innerHTML = "<h1>FAUX</h1>" +
                "Quatre groupes de déchets sont à déposer dans la poubelle à couvercle jaune :" +
                " Les bouteilles, bidons et flacons plastiques." +
                " Les boîtes métalliques, aérosols," +
                " Les cartonnettes et briques (emballages de lait, jus de fruit,…)";
            countLoose--;
            spanLoose.innerHTML = " Vie : " + countLoose;
            reset();
            if (countLoose === 0){
                alert("Partie terminé vous n'avezs plus de vie");
                answerd.innerHTML = "GAME OVER !";
            }
        }
    }
})
// compare if the waste is in the right place Green garbage
btnGreen.addEventListener('click', function () {
    if (garbageGreen.length < 2) {
        garbageGreen.push(newImg.src);
        answerd.innerHTML = "";
        if (garbageGreen[0].slice(-14) === "bi%C3%A8re.png"
           || garbageGreen[0].slice(-9) === "bocal.jpg") {
            alert("poubelle verte win + 1point !!")
            reset();
            countWin++;
            spanWin.innerHTML = "Score " + countWin;

            if(countWin == 5){
                alert("Tu as gagné !");
                answerd.innerHTML = "Tu as gagné !";
            }
        }
        else{
            answerd.innerHTML =  "<h1>FAUX</h1>" +
                "Que peut-on mettre dans le conteneur vert ?" +
                " Les résidus alimentaires : légumes, fruits, viande, poisson," +
                " restes de repas, os, produits laitiers, pain, céréales, marc de café," +
                " filtres, sachets de thé, coquilles d'œuf.";
            reset();
            countLoose--;
            spanLoose.innerHTML = " Vie : " + countLoose;

            if (countLoose === 0){
                alert("Partie terminé tu n'as plus de vie")
                answerd.innerHTML = "GAME OVER !";
            }
        }
    }
})
// compare if the waste is in the right place Blue garbage
btnBlue.addEventListener('click', function () {

if(garbageBlue.length < 2){
    garbageBlue.push(newImg.src);
    answerd.innerHTML = "";
    if(garbageBlue[0].slice(-12) === "journaux.jpg"
        || garbageBlue[0].slice(-12) === "magasine.jpg"){
        alert("poubelle bleu win + 1point !!")
        reset();
        countWin++;
        spanWin.innerHTML = "Score " + countWin;
        if(countWin == 5){
            alert("Tu as gagné !");
            answerd.innerHTML = "Tu as gagné !";
        }
    }
    else{
        answerd.innerHTML =  "<h1>FAUX</h1>" +
            "La poubelle bleue est moins commune." +
            " On y met généralement le papier, les journaux, les annuaires," +
            " les prospectus, etc. Grise/Noire : il s'agit de la poubelle “classique”." +
            " Elle sert à collecter le reste des déchets qui ne conviennent pas aux autres compartiments.";
        reset();
        countLoose--;
        spanLoose.innerHTML = " Vie : " + countLoose;

        if (countLoose === 0){
            alert("Partie terminé tu n'as plus de vie")
            answerd.innerHTML = "GAME OVER !";
        }
    }
}
})
// compare if the waste is in the right place Brown garbage
btnMaron.addEventListener('click', function () {
if(garbageMaron.length < 2){
    garbageMaron.push(newImg.src);
    answerd.innerHTML = "";
    if(garbageMaron[0].slice(-10) === "yaourt.jpg"
        || garbageMaron[0].slice(-10) === "couche.jpg"){
        alert("poubelle brune win + 1point !!");
        reset();
        countWin++;
        spanWin.innerHTML = "Score " + countWin;
        if(countWin == 5){
            alert("Tu as gagné !");
            answerd.innerHTML = "Tu as gagné !";
        }
    }
    else{
        answerd.innerHTML =  "<h1>FAUX</h1>" +
            "Que met-on dans le bac marron ?" +
            " - préparation de repas : épluchures de légumes," +
            " de fruits, coquilles d'œuf, découpes de viande et de poissons…" +
            " - fin de repas : les sachets de thé, les filtres à café et les serviettes de table en papier…";
        reset();
        countLoose--;
        spanLoose.innerHTML = " Vie : " + countLoose;

        if (countLoose === 0){
            alert("Partie terminé tu n'as plus de vie")
            answerd.innerHTML = "GAME OVER !";
        }
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

    clean.addEventListener('drop', function (){
        this.append(newImg);
        newImg.style.position = "relative";
        newImg.style.left = "50px";
        newImg.style.top = "95px";
        newImg.style.opacity = "0.8";
        newImg.style.border = "dotted green 1px";
    })
}