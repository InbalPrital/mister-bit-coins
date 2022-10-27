const axios= require ('axios')

export default {
getRate,
getMarketPrice
}

async function getRate (coins) {
const rate= await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
return rate.data
}

async function getMarketPrice(){
    const marketPrice= await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return marketPrice.data.values
}