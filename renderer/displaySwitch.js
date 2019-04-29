// Script for rendering main page content on index.html to keep it as a single page app

$ = require('jquery')

let inputPageSwitch = true
let displayPageSwitch = false
let foodcostPageSwitch = false

// if (displayPageSwitch === true) {
//     $('.display-page').show('fast', () => {
//     })
// } else if (displayPageSwitch === false) {
//     $('.display-page').hide('fast', () => {
//     })
// }

$('.input-page-button').click(() => {
    if (inputPageSwitch) {
        return
    } else {
        displayPageSwitch = false
        foodcostPageSwitch = false
        inputPageSwitch = true
    }
    if (!displayPageSwitch) {
        $('#display-page').hide()
    }
    if(!foodcostPageSwitch) {
        $('#foodcost-list-page').hide()
    }
    if (inputPageSwitch) {
    $('#input-page').fadeIn({duration: 700})
    }

})

$('.display-page-button').click(() => {
    if (displayPageSwitch) {
        return
    } else {
        inputPageSwitch = false
        foodcostPageSwitch = false
        displayPageSwitch = true
    }

    if (!inputPageSwitch) {
        $('#input-page').hide()
    }
    if (!foodcostPageSwitch) {
        $('#foodcost-list-page').hide()
    }
    if (displayPageSwitch) {
        $('#display-page').fadeIn({duration: 700})
    } 
})

$('.foodcost-list-button').click(() => {
    if (foodcostPageSwitch) {
        return
    } else {
        inputPageSwitch = false
        displayPageSwitch = false
        foodcostPageSwitch = true
    }

    if (!inputPageSwitch) {
        $('#input-page').hide()
    }
    if(!displayPageSwitch) {
        $('#display-page').hide()
    }
    if(foodcostPageSwitch) {
        $('#foodcost-list-page').fadeIn({duration: 700})
    }
})

// MenuItem Modal interaction
$('.foodcost-add-button').click(() => {
    $('#foodcost-menu-page').addClass('is-active')
})

$('.modal-background').click(() => {
    $('#foodcost-menu-page').removeClass('is-active')
})

$('.modal-close').click(() => {
    $('#foodcost-menu-page').removeClass('is-active')
})

$('.item-add-identifier').click(() => {
    if ($('#item-add-identifier').hasClass('is-active')) {
        $('#item-add-identifier').removeClass('is-active')
    } else {
        $('#item-add-identifier').addClass('is-active')
    }
})

