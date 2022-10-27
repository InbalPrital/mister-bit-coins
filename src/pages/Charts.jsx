import { Component } from 'react'
import BitcoinService from '../services/BitcoinService'
import { Statistics } from './Statistics'
// import { Line } from 'react-chartjs-2';


export class Charts extends Component {
    state = {
        marketPrice: null,
        priceDate: null
    }

    componentDidMount() {
        this.getMarketPrice()
        console.log('marketPrice', this.state.marketPrice);
        console.log('priceDate', this.state.priceDate);
    }

    async getMarketPrice() {
        const marketPrice = await BitcoinService.getMarketPrice()
        console.log(marketPrice)
        const priceArr = marketPrice.map((price) => {
            console.log('price', price);
            return price.y
        })
        const dateArr = marketPrice.map((price) => {
            return price.x
        })
        console.log('priceArr', priceArr);
        this.setState({ marketPrice: priceArr })
        console.log('this.marketproce', this.state.marketPrice);
        this.setState({ priceDate: dateArr })
    }

    render() {
        const { marketPrice, priceDate } = this.state
        return (
            <section>
                {
                    (!marketPrice || !priceDate) ? <div>Loading...</div> :
                        // marketPrice && 
                        <Statistics marketPrice={marketPrice} priceDate={priceDate} />
                }
            </section>
        )
    }
}
