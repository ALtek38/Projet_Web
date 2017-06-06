$(document).ready(function(){

	$('#Partie_2_1 button').click(function() {
		$("#Partie_3_1").show();
		$("#Partie_3_2").hide();

        var offerer = new Personne($('#name').val(),
                                   $('#address').val(),
                                   $('#mail').val());
        offerers.push(offerer);

        product = new Product($('#product').val(),
                              $('#day').val(),
                              $('#month').val(),
                              $('#year').val(),
                              $('#hour_start').val(),
                              $('#min_start').val(),
                              $('#fin_heure_dispo1').val(),
                              $('#fin_minute_dispo2').val());

        offerer.ajoutProd(product);

		$('#name_offerer').text(offerer.name);
		$('#address_offerer').text(offerer.address);
		$('#name_product').text(offerer.product);
		$('#name_product2').text(offerer.product);
		$('#jour_dispo2').text(offerer.jour_dispo);
		$('#mois_dispo2').text(offerer.mois_dispo);
		$('#annee_dispo2').text(offerer.annee_dispo);
		$('#debut_heure_dispo2').text(offerer.debut_heure_dispo);
		$('#debut_minute_dispo2').text(offerer.debut_minute_dispo);
		$('#fin_heure_dispo2').text(offerer.fin_heure_dispo);
		$('#fin_minute_dispo2').text(offerer.fin_minute_dispo);

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

function Product(name, jour, mois, annee, heure, min, heure_fin, min_fin) {
    this.name = name;
    this.debut = Date(annee, mois, jour, heure, min);
    this.fin = Date(annee, mois, jour, heure_fin, min_fin);
}

function Personne(name, address, mail) {
    this.name = name;
    this.address = address;
    this.mail = mail;

    this.products = [];

    this.ajoutProd = function(product) {
        this.products.push(product);
    }
}

function clear_list(blocID) {
    $(blocID).html('');
}

function print_list(blocID) {
    for (let i = 0; i < offerers.length; i++) {
        for (let j = 0; j < offerers[i].products.length; j++) {
            $(blocID).append("<input type='radio' name='product' value='"+ offerers[i].products[j].name + "'>"
                             + offerers[i].products[j].name
                             + "<br>");
        }
    }
}

function remove_item(blocID) {
    var nameProduct = $(blocID + ' input:checked').val();
    for (let i = 0; i < offerers.length; i++) {
        for (let j = 0; j < offerers[i].products.length; j++) {
            if (offerers[i].products[j].name == nameProduct) {
                offerers[i].products.splice(j, 1);
            }
        }
    }
}

var offerers = [];
