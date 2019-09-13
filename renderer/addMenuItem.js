$ = require('jquery')
const { remote } = require('electron')
const { Menu, MenuItem, getCurrentWindow  } = remote

$('.display-page-button').click((e) => {
    window.location.href = './index.html'
})
// Grab menu data from storage or set as empty
let listData = JSON.parse(localStorage.getItem('foodcost-list')) || {containerOne: [], containerTwo: [], containerThree: [], containerFour: [], containerFive: []}

let containerOne = listData.containerOne
let containerTwo = listData.containerTwo
let containerThree = listData.containerThree
let containerFour = listData.containerFour
let containerFive = listData.containerFive

// populate, edit, delete options for container one
if (containerOne.length > 0) {
    let containerOneClassName
    containerOne.forEach((item, index) => {
        containerOneClassName = item.title.toLowerCase().replace(/\s/g, '')
        $('.content-container-1').append(`<div class="${containerOneClassName}">
                                            <p>${item.title} ${item.menuPrice}</p>
                                          </div>`)
        $(`.${containerOneClassName}`).click((e) => {
            // Menu modal interaction if there is data present
            if ($('.content-container-1').text() !== 'No data recorded') {
                $('#menu-modal-page').addClass('is-active')   
                $('.modal-content').append(`<p class="modal-content__title">${item.title}</p>
                                        <input class="modal-content__title-edit" style="display:none;" value="${item.title}">
                                        <p class="modal-content__price">Menu Price: ${item.menuPrice}</p>
                                        <p class="modal-content__price-edit" style="display:none;">Menu Price: <input value="${item.menuPrice}"></p>
                                        <button class="modal-content__remove-item">Delete item</button>`)
                $('.modal-content__title').click(() => {
                    $('.modal-content__title').hide()
                    $('.modal-content__title-edit').show()
                    $('.modal-content__title-edit').blur((e) => {
                        listData.containerOne[index].title = e.target.value
                        $('.modal-content__title').text(e.target.value)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__title-edit').hide()
                        $('.modal-content__title').show()
                    })
                })
                $('.modal-content__price').click(() => {
                    $('.modal-content__price').hide()
                    $('.modal-content__price-edit').show()
                    $('.modal-content__price-edit input').blur((e) => {
                        listData.containerOne[index].menuPrice = e.target.value
                        $('.modal-content__price').text(`Menu Price: ${e.target.value}`)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__price-edit').hide()
                        $('.modal-content__price').show()
                    })
                }) 
                // Delete data in menu
                $('.modal-content__remove-item').click(() => {
                    listData.containerOne = (listData.containerOne.filter((item, filterIndex) => {
                        return listData.containerOne[index] !== listData.containerOne[filterIndex]
                    }))

                    localStorage.setItem('foodcost-list', JSON.stringify(listData))
                })
            }
             
        })
    })
} else if (containerOne.length === 0) {
    $('.content-container-1').append('<p>No data recorded</p>')
}

// populate, edit, delete options for container two
if (containerTwo.length > 0) {
    let containerTwoClassName
    containerTwo.forEach((item, index) => {
        containerTwoClassName = item.title.toLowerCase().replace(/\s/g, '')
        $('.content-container-2').append(`<div class="${containerTwoClassName}">
                                            <p>${item.title} ${item.menuPrice}</p>
                                          </div>`)
        $(`.${containerTwoClassName}`).click(() => {
            // Menu modal interaction if there is data present
            if ($('.content-container-2').text() !== 'No data recorded') {
                $('#menu-modal-page').addClass('is-active')       
                $('.modal-content').append(`<p class="modal-content__title">${item.title}</p>
                                        <input class="modal-content__title-edit" style="display:none;" value="${item.title}">
                                        <p class="modal-content__price">Menu Price: ${item.menuPrice}</p>
                                        <p class="modal-content__price-edit" style="display:none;">Menu Price: <input value="${item.menuPrice}"></p>
                                        <button class="modal-content__remove-item">Delete item</button>`)
                $('.modal-content__title').click(() => {
                    $('.modal-content__title').hide()
                    $('.modal-content__title-edit').show()
                    $('.modal-content__title-edit').blur((e) => {
                        listData.containerTwo[index].title = e.target.value
                        $('.modal-content__title').text(e.target.value)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__title-edit').hide()
                        $('.modal-content__title').show()
                    }) 
                })
                $('.modal-content__price').click(() => {
                    $('.modal-content__price').hide()
                    $('.modal-content__price-edit').show()
                    $('.modal-content__price-edit input').blur((e) => {
                        listData.containerTwo[index].menuPrice = e.target.value
                        $('.modal-content__price').text(`Menu Price: ${e.target.value}`)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__price-edit').hide()
                        $('.modal-content__price').show()
                    })
                })
                // Delete data in menu
                $('.modal-content__remove-item').click(() => {
                    listData.containerTwo = (listData.containerTwo.filter((item, filterIndex) => {
                        return listData.containerTwo[index] !== listData.containerTwo[filterIndex]
                    }))

                    localStorage.setItem('foodcost-list', JSON.stringify(listData))
                }) 
            }
        })
    })
} else if (containerTwo.length === 0) {
    $('.content-container-2').append('<p>No data recorded</p>')
}

// populate, edit, delete options for container three
if (containerThree.length > 0) {
    let containerThreeClassName
    containerThree.forEach((item, index) => {
        containerThreeClassName = item.title.toLowerCase().replace(/\s/g, '')
        $('.content-container-3').append(`<div class="${containerThreeClassName}">
                                            <p>${item.title} ${item.menuPrice}</p>
                                          </div>`)
        $(`.${containerThreeClassName}`).click(() => {
            // Menu modal interaction if there is data present
            if ($('.content-container-3').text() !== 'No data recorded') {
                $('#menu-modal-page').addClass('is-active')   
                $('.modal-content').append(`<p class="modal-content__title">${item.title}</p>
                                        <input class="modal-content__title-edit" style="display:none;" value="${item.title}">
                                        <p class="modal-content__price">Menu Price: ${item.menuPrice}</p>
                                        <p class="modal-content__price-edit" style="display:none;">Menu Price: <input value="${item.menuPrice}"></p>
                                        <button class="modal-content__remove-item">Delete item</button>`)
                $('.modal-content__title').click(() => {
                    $('.modal-content__title').hide()
                    $('.modal-content__title-edit').show()
                    $('.modal-content__title-edit').blur((e) => {
                        listData.containerThree[index].title = e.target.value
                        $('.modal-content__title').text(e.target.value)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__title-edit').hide()
                        $('.modal-content__title').show()
                    }) 
                })
                $('.modal-content__price').click(() => {
                    $('.modal-content__price').hide()
                    $('.modal-content__price-edit').show()
                    $('.modal-content__price-edit input').blur((e) => {
                        listData.containerThree[index].menuPrice = e.target.value
                        $('.modal-content__price').text(`Menu Price: ${e.target.value}`)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__price-edit').hide()
                        $('.modal-content__price').show()
                    })
                })
                // Delete data in menu
                $('.modal-content__remove-item').click(() => {
                    listData.containerThree = (listData.containerThree.filter((item, filterIndex) => {
                        return listData.containerThree[index] !== listData.containerThree[filterIndex]
                    }))

                    localStorage.setItem('foodcost-list', JSON.stringify(listData))
                })
            }  
        })
    })
} else if (containerThree.length === 0) {
    $('.content-container-3').append('<p>No data recorded</p>')
}

// populate, edit, delete options for container four
if (containerFour.length > 0) {
    let containerFourClassName
    containerFour.forEach((item, index) => {
        containerFourClassName = item.title.toLowerCase().replace(/\s/g, '')
        $('.content-container-4').append(`<div class="${containerFourClassName}">
                                            <p>${item.title} ${item.menuPrice}</p>
                                          </div>`)
        $(`.${containerFourClassName}`).click(() => {
            // Menu modal interaction if there is data present
            if ($('.content-container-4').text() !== 'No data recorded') {
                $('#menu-modal-page').addClass('is-active')   
                $('.modal-content').append(`<p class="modal-content__title">${item.title}</p>
                                        <input class="modal-content__title-edit" style="display:none;" value="${item.title}">
                                        <p class="modal-content__price">Menu Price: ${item.menuPrice}</p>
                                        <p class="modal-content__price-edit" style="display:none;">Menu Price: <input value="${item.menuPrice}"></p>
                                        <button class="modal-content__remove-item">Delete item</button>`)
                $('.modal-content__title').click(() => {
                    $('.modal-content__title').hide()
                    $('.modal-content__title-edit').show()
                    $('.modal-content__title-edit').blur((e) => {
                        listData.containerFour[index].title = e.target.value
                        $('.modal-content__title').text(e.target.value)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__title-edit').hide()
                        $('.modal-content__title').show()
                    }) 
                })
                $('.modal-content__price').click(() => {
                    $('.modal-content__price').hide()
                    $('.modal-content__price-edit').show()
                    $('.modal-content__price-edit input').blur((e) => {
                        listData.containerFour[index].menuPrice = e.target.value
                        $('.modal-content__price').text(`Menu Price: ${e.target.value}`)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__price-edit').hide()
                        $('.modal-content__price').show()
                    })
                })
                // Delete data in menu
                $('.modal-content__remove-item').click(() => {
                    listData.containerFour = (listData.containerFour.filter((item, filterIndex) => {
                        return listData.containerFour[index] !== listData.containerFour[filterIndex]
                    }))

                    localStorage.setItem('foodcost-list', JSON.stringify(listData))
                })
            } 
        })
    })
} else if (containerFour.length === 0) {
    $('.content-container-4').append('<p>No data recorded</p>')
}

// populate, edit, delete options for container five
if (containerFive.length > 0) {
    let containerFiveClassName
    containerFive.forEach((item, index) => {
        containerFiveClassName = item.title.toLowerCase().replace(/\s/g, '')
        $('.content-container-5').append(`<div class="${containerFiveClassName}">
                                            <p>${item.title} ${item.menuPrice}</p>
                                          </div>`)
        $(`.${containerFiveClassName}`).click(() => {
            // Menu modal interaction if there is data present
            if ($('.content-container-5').text() !== 'No data recorded') {
                $('#menu-modal-page').addClass('is-active')   
                $('.modal-content').append(`<p class="modal-content__title">${item.title}</p>
                                        <input class="modal-content__title-edit" style="display:none;" value="${item.title}">
                                        <p class="modal-content__price">Menu Price: ${item.menuPrice}</p>
                                        <p class="modal-content__price-edit" style="display:none;">Menu Price: <input value="${item.menuPrice}"></p>
                                        <button class="modal-content__remove-item">Delete item</button>`)
                $('.modal-content__title').click(() => {
                    $('.modal-content__title').hide()
                    $('.modal-content__title-edit').show()
                    $('.modal-content__title-edit').blur((e) => {
                        listData.containerFive[index].title = e.target.value
                        $('.modal-content__title').text(e.target.value)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__title-edit').hide()
                        $('.modal-content__title').show()
                    }) 
                })
                $('.modal-content__price').click(() => {
                    $('.modal-content__price').hide()
                    $('.modal-content__price-edit').show()
                    $('.modal-content__price-edit input').blur((e) => {
                        listData.containerFive[index].menuPrice = e.target.value
                        $('.modal-content__price').text(`Menu Price: ${e.target.value}`)
                        localStorage.setItem('foodcost-list', JSON.stringify(listData))
                        $('.modal-content__price-edit').hide()
                        $('.modal-content__price').show()
                    })
                })
                // Delete data in menu
                $('.modal-content__remove-item').click(() => {
                    listData.containerFive = (listData.containerFive.filter((item, filterIndex) => {
                        return listData.containerFive[index] !== listData.containerFive[filterIndex]
                    }))

                    localStorage.setItem('foodcost-list', JSON.stringify(listData))
                }) 
            }
            
        })
    })
} else if (containerFive.length === 0) {
    $('.content-container-5').append('<p>No data recorded</p>')
}

// MenuItem Modal interaction
$('.modal-background').click(() => {
    $('.modal-content').empty()
    $('#menu-modal-page').removeClass('is-active')
})

$('.modal-close').click(() => {
    $('.modal-content').empty()
    $('#menu-modal-page').removeClass('is-active')
})

const modalAddContent = (e) => {
    $('#menu-modal-page').addClass('is-active')
    // Setting the div clicked on to variable
    let itemContainer = ''
    let htmlClassContainer = e.currentTarget.classList
    switch (htmlClassContainer[2]) {
        case 'content-container-1' :
            itemContainer = 'containerOne'
            break
        case 'content-container-2' :
            itemContainer = 'containerTwo'
            break
        case 'content-container-3' :
            itemContainer = 'containerThree'
            break
        case 'content-container-4' :
            itemContainer = 'containerFour'
            break
        case 'content-container-5' :
            itemContainer = 'containerFive'
            break
        default :
            break
    }
    $('.modal-content').append(`
    <div class="modal-add-item">
        <input placeholder="title" class="modal-add-item--title">
        <input type="number" placeholder="Menu Price" class="modal-add-item--price">
        <div>
            <span class="modal-attribute">title</span>
        </div>
        <button class="modal-add-item--button">Add Item</button>
    </div>
    `)
    
    
    $('.modal-add-item--button').click((e) => {
        let modalData
        switch (itemContainer) {
            case 'containerOne':
                modalData = {
                    title: $('.modal-add-item--title').val(),
                    menuPrice: $('.modal-add-item--price').val()
                }
                containerOne.push(modalData)
                break
            case 'containerTwo':
                modalData = {
                    title: $('.modal-add-item--title').val(),
                    menuPrice: $('.modal-add-item--price').val()
                }
                containerTwo.push(modalData)
                break
            case 'containerThree':
                modalData = {
                    title: $('.modal-add-item--title').val(),
                    menuPrice: $('.modal-add-item--price').val()
                }
                containerThree.push(modalData)
                break
            case 'containerFour':
                modalData = {
                    title: $('.modal-add-item--title').val(),
                    menuPrice: $('.modal-add-item--price').val()
                }
                containerFour.push(modalData)
                break
            case 'containerFive':
                modalData = {
                    title: $('.modal-add-item--title').val(),
                    menuPrice: $('.modal-add-item--price').val()
                }
                containerFive.push(modalData)
                break

        }
        
        localStorage.setItem('foodcost-list', JSON.stringify(listData))
    
        // Turn the page render into a function to update content without reloading page later
        getCurrentWindow().reload()
    })

    $('.modal-attribute').click(() => {
        if ($('.modal-attribute').hasClass('active') === false) {
            $('.modal-attribute').addClass('active')
            
        } else {
            $('.modal-attribute').removeClass('active')
        }
    })
}



$('.content-container-1, .content-container-2, .content-container-3, .content-container-4, .content-container-5').contextmenu((e) => {
    modalAddContent(e)
})