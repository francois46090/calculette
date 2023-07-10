// ajout d'un ecouteur d'évènements sur le formulaire #form
document.getElementById('form').addEventListener('submit',function(e){
    // instructions à lancer sur l'évènelent du formulaire

    document.getElementById('resultats').style.display='none';
    document.getElementById('chargement').style.display='block';

    setTimeout(calculResultats,2000);

    e.preventDefault();

});



function calculResultats(e){

}


// Gestion des messages d'erreur
function showError(){}


// supprimer l'affichage des erreurs

function clearError(){}