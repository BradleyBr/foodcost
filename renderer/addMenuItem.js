$ = require('jquery')
const { remote } = require('electron')
const { Menu, MenuItem } = remote

$('.display-page-button').click((e) => {
    window.location.href = './index.html'
})
// Populate menu data
let listData = JSON.parse(localStorage.getItem('foodcost-list')) || {items: []}
listData.items.length > 0 ? listData.items.forEach((item) => {
    let htmlClassName = item.title.toLowerCase().replace(' ', '')
    $('.add-content').append(`<div class="${htmlClassName}">
                                <p>${item.title} ${item.menuPrice}</p>
                             </div>`)
    $(`.${htmlClassName}`).click((e) => {
        $('.modal-content').append(`<p>${item.title}</p>
                                   <p>Menu Price: ${item.menuPrice}</p>`)
    })
    
}) : $('.add-content').append('<p>No data recorded</p>')

// MenuItem Modal interaction
$('.add-content').click((e) => {
    $('#menu-modal-page').addClass('is-active')
})

$('.modal-background').click(() => {
    $('.modal-content').empty()
    $('#menu-modal-page').removeClass('is-active')
})

$('.modal-close').click(() => {
    $('.modal-content').empty()
    $('#menu-modal-page').removeClass('is-active')
})

const modalAddContent = () => {
    $('#menu-modal-page').addClass('is-active')
    console.log(listData)
    $('.modal-content').append(`
    <div class="modal-add-item">
        <input placeholder="title" class="modal-add-item--title">
        <input type="number" placeholder="Menu Price" class="modal-add-item--price">
        <button class="modal-add-item--button">Add Item</button>
    </div>
    `)
    $('.modal-add-item--button').click((e) => {
    let modalData = {
        title: $('.modal-add-item--title').val(),
        menuPrice: $('.modal-add-item--price').val()
    }
    listData.items.push(modalData)
    localStorage.setItem('foodcost-list', JSON.stringify(listData))
})
}

// Right click menu on Menu page
const menu = new Menu()
menu.append(new MenuItem({ label: 'Add Content', click() { modalAddContent() } }))

$('.add-content').contextmenu(() => {
    menu.popup({ window: remote.getCurrentWindow() }, false)
})