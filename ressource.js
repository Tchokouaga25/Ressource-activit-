
const NOM = document.querySelector("#c1");
const email   = document.querySelector("#c2");
const postal = document.querySelector("#c3");
const localite = document.querySelector("#c4");

const t2 = document.querySelector("#t2");
const t3 = document.querySelector("#t3");
const t4 = document.querySelector("#t4");

// Fonction pour sauvegarder les données du formulaire

function soumettreFormulaire (){
    const Nom = NOM.value;
    const Email = email.value;
    const Postale = postal.value;
    const Localiter = localite.value;

    let Formee = {
        Nom : Nom ,
        Email : Email,
        Postale : Postale,
        Localiter : Localiter,
    }

    localStorage.setItem('formulaire',Formee);
    localStorage.getItem('form',JSON.stringify(Formee));
}



// let input1=[];
  // ajouter une pays

    
    
    // if(isNaN(valeurr) || valeurr.trim().length ===null || valeurr!== "" || valeur !== Number){
    //     input1.push(valeurr);
    //     console.log(input1);
    // }else {
    //     if( valeurrr === input1){
    //         console.log("Entrer le nom d'un pays qui ne se touve pas dans la liste");
    //     }else {
    //         console.log("Entrer le nom d'une ville de vorte pays valide");
    //     }
    // }

function myFunction(){
    const inputPays= document.getElementById('c5');
    const selectPays = document.getElementById('lepays');
    const SelectPays = selectPays.value.trim();
    const InputPays= inputPays.value.trim();

    for (let i= 0; i < SelectPays.options;i++){

        if (SelectPays.options[i].text.toLowerCase() === inputPays.toLowerCase()) {
            InputPays.classList.add("error");
            inputPays = "";
            InputPays.textContent= 'Nom invalide, le nom doit etre entre 8 et 20 caractère';
            inputPays.style.boderColor = "red";
            return;
        }
    }

    let option= document.createElement("option");
    option.text=inputPays;
    SelectPays.add(option);
    
    inputPays = "";
   
}




function forme(){
    verifierNom();
    verifierAdresse();
    verifierPostal();
}

function verifierNom() {
    const nom = NOM.value.trim();
    if(/^[A-Za-z\s]{8,20}$/.test(nom)){
        t2.textContent="";
        NOM.style.borderColor='2px solid green';
    }else{
        t2.classList.add("error");
        t2.textContent= 'Nom invalide, le nom doit etre entre 8 et 20 caractère';
        NOM.style.boderColor = "red";
    }
}



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
    if(Postal != 3000 && Postal != 4000){
        t4.classList.add("error");
        t4.textContent= 'code postal invalide, entrer soit 3000 ,soit 4000';
        
    }else {
        if(Postal == 3000){
            document.querySelector("#c4").value="Ville1"  
        }else{
            document.querySelector("#c4").value="Ville2"
        }
        postal.style.borderColor='green';
    }
}

function afficher() {
    const Nom = NOM.value;
    const Email = email.value;
    const Postale = postal.value;
    const Localiter = localite.value;
    // Construction de la chaîne à afficher
    const infoFormulaire = `Nom : ${Nom}\nEmail : ${Email}\nPostal : ${Postale}\nLocalité : ${Localiter}`;
    alert(infoFormulaire);
    
}

  



  
