$(document).ready(function(){

	$('#Partie_2_1 button').click(function() {
		$("#Partie_3_1").show();
		$("#Partie_3_2").hide();
		
		var offreur = {
		nom: $('#nom').val(),
		adresse: $('#adresse').val(),
		adresse_mail: $('#adresse_mail').val(),
		produit: $('#produit').val(),
		jour_dispo: $('#jour_dispo1').val(),
		mois_dispo: $('#mois_dispo1').val(),
		annee_dispo: $('#annee_dispo1').val(),
		debut_heure_dispo: $('#debut_heure_dispo1').val(),
		debut_minute_dispo: $('#debut_minute_dispo1').val(),
		fin_heure_dispo: $('#fin_heure_dispo1').val(),
		fin_minute_dispo: $('#fin_minute_dispo1').val(),
		}
		
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
	});
	
	$('#Partie_2_2 button').click(function() {
		$("#Partie_3_2").show();
		$("#Partie_3_1").hide();
	});
});