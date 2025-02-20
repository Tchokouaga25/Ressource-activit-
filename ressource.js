const input= document.querySelector("#c5");
const NOM = document.querySelector("#c1");
const email   = document.querySelector("#c2");
const postal = document.querySelector("#c3");
const localite = document.querySelector("#c4");
const lepays =document.querySelector("#lepays");
const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");

let input1=[];
  // ajouter une ville
function myFunction(){
  let valeurr = input.value;
  
  if(isNaN(valeurr) || valeurr.trim().length ===null || valeurr!== "" || valeur !== Number){
    input1.push(valeurr);
    console.log(input1);
  }else if( valeurrr == input1){
    console.log("Entrer le nom d'un pays qui ne se touve pas dans la liste");
  }else {
    console.log("Entrer le nom d'une ville de vorte pays valide");
  }
   
}
function monPays(){
    let valeurr = lepays.value;
    if(isNaN(valeurr) || valeurr.trim().length ===null || valeurr!== "" || valeur !== Number){
      input1.innerText(valeurr);
      console.log(input1);
    }else{
      console.log("Entrer le nom d'une ville de vorte pays valide");
    }
     
}



function forme(){
    verifierNom();
    verifierAdresse();
    verifierPostal();
}
function verifierNom() {
    const nom = NOM.value;
    if(/^[A-Za-z\s]{8,20}$/.test(nom)){
        t2.textContent="";
        NOM.style.borderColor='green';
    }else{
        t2.classList.add("error");
        t2.textContent= 'Nom invalide, le nom doit etre entre 8 et 20 caractère';
        NOM.style.boderColor = "red";
    }
}

NOM.addEventListener('input', verifierNom);

function verifierAdresse() {
    const Email = email.value;
    if(/^[A-Za-z\s]{1,20}$/.test(Email)){
        t3.textContent="";
        email.style.borderColor='green';
    }else{
        t3.classList.add("error");
        t3.textContent= 'Adresse invalide, Adresse doit contenir 20 caractère minimum';
        email.style.boderColor = "red";
    }
}

function verifierPostal() {
    const Postal = postal.value;
    if(Postal == 3000){
        t4.textContent="";
        localite.innerHTML= "Ville1";
        postal.style.borderColor='green';
    }else if(Postal == 4000){
        t4.textContent="";
        localite.innerHTML= "Ville2";
        postal.style.borderColor='green';
    }else{
        t4.classList.add("error");
        t4.textContent= 'Erreur, il faut choisir seulemnt 3000 ou 4000';
        postal.style.boderColor = "red";
    }
}

function alert(){
    let tableau = [];
    tableau.push(verifierNom(),verifierAdresse(),verifierPostal());
    alert(tableau);
}