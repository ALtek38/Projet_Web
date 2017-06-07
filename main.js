$(document).ready(function() {

    $('#Partie_2_1 button').click(function() {
        $("#Partie_3_1").show()
        $("#Partie_3_2").hide()

        var offerer = new Person($('#name').val(),
            $('#address').val(),
            $('#mail').val())
        offerer.id = offerers[0]
        offerers.push(offerer)
        offerers[0]++

            product = new Product($('#product').val(),
                $('#day').val(),
                $('#month').val(),
                $('#year').val(),
                $('#hour_start').val(),
                $('#min_start').val(),
                $('#hour_end').val(),
                $('#min_end').val())

        offerer.ajoutProd(product)

        $('#name_offerer').text(offerer.name)
        $('#address_offerer').text(offerer.address)
        $('#name_product').text(product.name)
        $('#day_avail').text(product.start.getDate())
        $('#month_avail').text(product.start.getMonth())
        $('#year_avail').text(product.start.getFullYear())
        $('#hour_start_avail').text(product.start.getHours())
        $('#minute_start_avail').text(product.start.getMinutes())
        $('#hour_end_avail').text(product.end.getHours())
        $('#min_end_avail').text(product.end.getMinutes())

        clear_list("#list_product")
        print_list("#list_product")
    })

    $('#Partie_2_2 button').click(function() {
        $("#Partie_3_2").show()
        $("#Partie_3_1").hide()

        remove_item('#list_product')
        clear_list("#list_product")
        print_list("#list_product")
    })
})

function Product(name, day, month, year, hour, min, hour_end, min_end) {
    this.name = name
    this.start = new Date(year, month, day, hour, min)
    this.end = new Date(year, month, day, hour_end, min_end)
}

function Person(name, address, mail) {
    this.name = name
    this.address = address
    this.mail = mail

    this.products = [0]

    this.ajoutProd = function(product) {
        this.products.push(product)
        this.products[this.products.length - 1].id = this.products[0]
        this.products[0]++
    }
}

function clear_list(blocID) {
    $(blocID).html('')
}

function print_list(blocID) {
    for (let i = 1; i < offerers.length; i++) {
        for (let j = 1; j < offerers[i].products.length; j++) {
            $(blocID).append("<input type='radio' name='product' value='" +
                offerers[i].products[j].name +
                offerers[i].id +
                offerers[i].products[j].id + "'>" +
                offerers[i].products[j].name +
                "<br>")
        }
    }
}

function remove_item(blocID) {
    var valueID = $(blocID + ' input:checked').val()
    for (let i = 1; i < offerers.length; i++) {
        for (let j = 1; j < offerers[i].products.length; j++) {
            let idProduct = offerers[i].products[j].name +
                offerers[i].id +
                offerers[i].products[j].id
            if (idProduct == valueID) {
                offerers[i].products.splice(j, 1)
            }
        }
    }
}

var offerers = [0]
