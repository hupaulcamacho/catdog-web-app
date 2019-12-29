import React, { Component } from 'react';
import axios from 'axios'

import CatDisplay from './CatDisplay'

class CatSearch extends Component {
    constructor() {
        super();
        this.state = {
            catUrls: [],
            quantity: 0
        }
    }
    
    handleQuantityChange = (event) => {
        let quantity = event.target.value
        this.setState({
          quantity: quantity
        })
    }
    loadUrls = (data) => {
        let { catUrls } = this.state
        let newcats = [...catUrls]
        for (let cat of data) {
            newcats.push(cat.url)
        }
        this.setState({
            catUrls: newcats
        })
    }

    getCatPicture = async() => {
        this.setState({
            catUrls: []
        })
        let { quantity } = this.state
        let catAPIURL = "https://api.thecatapi.com/v1/images/search"
        if (parseInt(quantity) > 0) {
            catAPIURL = `https://api.thecatapi.com/v1/images/search?limit=${quantity}`
        }
        try {
            const { data } = await axios.get(catAPIURL);
            this.loadUrls(data)
            
        } catch (error) {
            console.log("err:", error);
        }
    }

    render() {
        const { catUrls, quantity } = this.state
        return (
            <div>
                <h1>Get Random Cats!</h1>
                <form>
                    <input id='number' type='number' min='0' value= {quantity} onChange={this.handleQuantityChange} />
                </form>
                <button onClick={this.getCatPicture}>new cat</button>
                <CatDisplay catUrls={catUrls} />
            </div>
        )
    }
}

export default CatSearch