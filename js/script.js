// ajout d'un ecouteur d'évènements sur le formulaire #form
document.getElementById('form').addEventListener('submit',function(e){
    // instructions à lancer sur l'évènelent du formulaire

    document.getElementById('resultats').style.display='none';
    document.getElementById('chargement').style.display='block';

    setTimeout(calculResultats,2000);

    e.preventDefault();

});



function calculResultats(e){
    // on récupère les valeurs des champs du formulaire
    const montant = document.getElementById('montant');
    const interets = document.getElementById('interet');
    const annees = document.getElementById('annees');
    // on récupère le résultat des calculs pour chaque ligne
    const paiementMensuel = document.getElementById('paiement-mensuel');
    const montantTotal = document.getElementById('montant-total');
    const coutInterets = document.getElementById('montant-interet');

    // Typage des valeurs de base

    const montantDecimal = parseFloat(montant.value);

    // calcul 100 + 20 % /12
    const calculInteret = parseFloat(interets.value)/100/12;

    // affichage du résultat sur 12 mois

    const calculPaiements = parseFloat(annees.value)*12;

    // Calcul 

    const x = Math.pow(1+calculInteret,calculPaiements);
    const mensuel = (montantDecimal * x * calculInteret)/(x-1);



    // Creation d'une fonction : arrondir à 2 chiffres après la virgule + calculs

    // On vérifie que le format obtenu via les constantes est bon

    // isFinite() = true = IFinite(123) / (1.23), (-1.23),(5-2),(0)
    // False => ('123'), ('bonjour'),('11/07/2023'),(Infinity),(-Infinity)(0/0)

    if(isFinite(mensuel)){
        paiementMensuel.value = mensuel.toFixed(2);

        montantTotal.value = (mensuel * calculPaiements).toFixed(2);

        coutInterets.value = ((mensuel * calculPaiements) - montantDecimal).toFixed(2);

        // Affichage des résultats sur la page

        document.getElementById('resultats').style.display ='block';
        document.getElementById('chargement').style.display = 'none';


    }

    // lancement de la fonction showError()

    else{
        showError('Merci de vérifier votre saisie');
    }

}


// Gestion des messages d'erreur
function showError(error){

    document.getElementById('resultats').style.display ='none';
    document.getElementById('chargement').style.display = 'none';

    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.display-5');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    // insertion du message d'erreur au desuus du titre

    card.insertBefore(errorDiv,heading);

    // supprimer le message d'erreur après 3 secondes

    setTimeout(clearError,3000);

}


// supprimer l'affichage des erreurs

function clearError(){
    document.querySelector('.alert').remove();
}