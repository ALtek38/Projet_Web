$(document).ready(function(){

	$('#Partie_2_1 button').click(function() {
		$("#Partie_3_1").show();
		$("#Partie_3_2").hide();

        var offreur = new Personne($('#nom').val(),
                                   $('#adresse').val(),
                                   $('#adresse_mail').val());
        offreurs.push(offreur);

        produit = new Produit($('#produit').val(),
                              $('#jour_dispo1').val(),
                              $('#mois_dispo1').val(),
                              $('#annee_dispo1').val(),
                              $('#debut_heure_dispo1').val(),
                              $('#debut_minute_dispo1').val(),
                              $('#fin_heure_dispo1').val(),
                              $('#fin_minute_dispo2').val());

        offreur.ajoutProd(produit);

		$('#nom_offreur').text(offreur.nom);
		$('#adresse_offreur').text(offreur.adresse);
		$('#nom_produit').text(offreur.produit);
		$('#nom_produit2').text(offreur.produit);
		$('#jour_dispo2').text(offreur.jour_dispo);
		$('#mois_dispo2').text(offreur.mois_dispo);
		$('#annee_dispo2').text(offreur.annee_dispo);
		$('#debut_heure_dispo2').text(offreur.debut_heure_dispo);
		$('#debut_minute_dispo2').text(offreur.debut_minute_dispo);
		$('#fin_heure_dispo2').text(offreur.fin_heure_dispo);
		$('#fin_minute_dispo2').text(offreur.fin_minute_dispo);

        clear_list("#liste_dyna");
        print_list("#liste_dyna");
	});

	$('#Partie_2_2 button').click(function() {
		$("#Partie_3_2").show();
		$("#Partie_3_1").hide();

        remove_item('#liste_dyna');
        clear_list("#liste_dyna");
        print_list("#liste_dyna");
	});
});

function Produit(nom, jour, mois, annee, heure, min, heure_fin, min_fin) {
    this.nom = nom;
    this.debut = Date(annee, mois, jour, heure, min);
    this.fin = Date(annee, mois, jour, heure_fin, min_fin);
}

function Personne(nom, adresse, mail) {
    this.nom = nom;
    this.adresse = adresse;
    this.mail = mail;

    this.produits = [];

    this.ajoutProd = function(produit) {
        this.produits.push(produit);
    }
}

function clear_list(blocID) {
    $(blocID).html('');
}

function print_list(blocID) {
    for (let i = 0; i < offreurs.length; i++) {
        for (let j = 0; j < offreurs[i].produits.length; j++) {
            $(blocID).append("<input type='radio' name='produit' value='"+ offreurs[i].produits[j].nom + "'>"
                             + offreurs[i].produits[j].nom
                             + "<br>");
        }
    }
}

function remove_item(blocID) {
    var nomProduit = $(blocID + ' input:checked').val();
    for (let i = 0; i < offreurs.length; i++) {
        for (let j = 0; j < offreurs[i].produits.length; j++) {
            if (offreurs[i].produits[j].nom == nomProduit) {
                offreurs[i].produits.splice(j, 1);
            }
        }
    }
}

var offreurs = [];
