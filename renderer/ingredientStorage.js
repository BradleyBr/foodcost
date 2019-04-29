$ = require('jquery')
function setDisplay () {
    let storageObj = JSON.parse(localStorage.getItem('dataObj')) || {}
    if (Object.keys(storageObj).length > 0) {

        let {
            cod: {
                codWeight, codPrice, codTrim, cutFish, individualFish
            },
            potato: {
                potatoWeight, potatoPrice, potatoFries
            },
            mayo: {
                mayoWeight, mayoPrice
            },
            tartar: {
                tartarWeight, tartarPrice
            }, dillPrice, batterPrice, saltPrice, ketchupPrice, condimentPrice, canolaPrice
        } = storageObj

        // Consider replacing this data to reflect storageObj
        if (codTrim === null || codTrim.length === 0) {
            codTrim = 0
        } else {
            codTrim = codTrim/100
        }

        let codPriceTrim = Number.parseFloat((codPrice/(codWeight*(1-codTrim))).toFixed(2))
        let singleFishCost = Number.parseFloat(((codPriceTrim*codWeight)/cutFish).toFixed(2))

        let potatoPricePerPound = Number.parseFloat((potatoPrice/potatoWeight).toFixed(2))

        let codSwitch = {
            weight: false,
            price: false
        }


        if (!codWeight) {
            codSwitch.weight = false
            $('.display-cod-weight').html('<p>No cod weight data available</p>')
        } else {
            codSwitch.weight = true
            $('.display-cod-weight').html(`<p>Weight of cod (per box): ${codWeight}lbs</p>`)
        }
        
        if (!codPrice) {
            codSwitch.price = false
            $('.display-cod-price').html('<p>No pricing data available</p>')
        } else {
            codSwitch.price = true
            $('.display-cod-price').html(`<p>Price of cod (per box): ${codPrice}</p>`)
        }
        
        if (!codTrim) {
            $('.display-cod-trim').html('<p>No trim rate data available</p>')
        } else {
            $('.display-cod-trim').html(`<p>Trim rate: ${codTrim*100}%</p>`)
        }
        
        if (codSwitch.weight === true && codSwitch.price === true) {
        $('.display-cod-price-individual-trimmed').html(`<p>Price of cod per lb after trim: ${codPriceTrim}</p>`)   
        }
        
        if (!cutFish) {
            $('.display-cut-fish').html('<p>No cut fish per box data available</p>')
        } else {
            $('.display-cut-fish').html(`Cut fish per box: ${cutFish}`)
        }
        
        if (!singleFishCost) {
            $('.display-cost-single-fish').html('<p>No cost of individual fish data available</p>')
        } else {
            $('.display-cost-single-fish').html(`<p>Cost of individual fish: ${singleFishCost}</p>`)
        }
        
        !potatoWeight ? 
            $('.display-potato-weight').html('<p>No potato weight data available</p>') :
            $('.display-potato-weight').html(`<p>Weight of potatoes (per box): ${potatoWeight}lbs</p>`)
        
        !potatoPrice ?
            $('.display-potato-price').html('<p>No potato pricing data available</p>') :
            $('.display-potato-price').html(`<p>Price of potatoes (per box): ${Number(potatoPrice).toFixed(2)}</p>`)
        
        potatoFries ?
            $('.display-potato-fries').html(`<p>Amount of small fries per box: ${potatoFries}</p>
                                            <p>Price of small fries: ${potatoPrice/potatoFries}</p>`) : null
        
        !mayoWeight ? 
            $('.display-mayo-weight').html('<p>No mayo volume data available</p>') :
            $('.display-mayo-weight').html(`<p>Volume of mayo container: ${mayoWeight}</p>`)
        
        !mayoPrice ?
            $('.display-mayo-price').html('<p>No mayo pricing data available</p>') :
            $('.display-mayo-price').html(`<p>Price of mayo container: ${mayoPrice}</p>`)
        
        !tartarWeight ? 
            $('.display-tartar-weight').html('<p>No tartar volume data available</p>') :
            $('.display-tartar-weight').html(`<p>Volume of tartar container: ${tartarWeight}</p>`)
        
        !tartarPrice ?
            $('.display-tartar-price').html('<p>No tartar pricing data available</p>') :
            $('.display-tartar-price').html(`<p>Price of tartar container: ${tartarPrice}</p>`)
        
        !dillPrice ?
            $('.display-dill-price').html('<p>No dill pricing data available</p>') :
            $('.display-dill-price').html(`<p>Price of dill container: ${dillPrice}</p>`)
        
        !batterPrice ?
            $('.display-batter-price').html('<p>No batter pricing data available</p>') :
            $('.display-batter-price').html(`<p>Price of batter (Vinegar, baking powder, milk 2%) per fish fillet: ${batterPrice}</p>`)
        
        !saltPrice ?
            $('.display-salt-price').html('<p>No salt pricing data available</p>') :
            $('.display-salt-price').html(`<p>Price of salt per order: ${saltPrice}</p>`)
        
        !ketchupPrice ?
            $('.display-ketchup-price').html('<p>No ketchup pricing data available</p>') :
            $('.display-ketchup-price').html(`<p>Price of ketchup per order: ${ketchupPrice}</p>`)
        
        !condimentPrice ?
            $('.display-condiment-price').html('<p>No condiment pricing data available</p>') :
            $('.display-condiment-price').html(`<p>Price of condiments per order: ${condimentPrice}</p>`)    
        
        !canolaPrice ?
            $('.display-canola-price').html('<p>No canola oil pricing data available</p>') :
            $('.display-canola-price').html(`<p>Price of canola oil: ${canolaPrice}</p>`)
    } else {
        return
    }
}
module.exports = setDisplay
