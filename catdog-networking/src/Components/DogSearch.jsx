import React, { Component } from 'react';
import axios from 'axios'
import DogDisplay from './DogDisplay';

class DogSearch extends Component {
    constructor() {
        super();
        this.state = {
            dogUrls: [],
            breeds: [],
            selectedBreed: '',
            quantity: 0
        }
    }

    componentDidMount() {
        this.getDogBreeds();
    }

    handleBreedChange = (event) => {
        const newBreed = event.target.value
        this.setState({
          selectedBreed: newBreed
        })
    }

    handleQuantityChange = (event) => {
        let quantity = event.target.value
        console.log(quantity)
        this.setState({
          quantity: quantity
        })
    }

    handleNewDogButton = event => {
        const { selectedBreed } = this.state
        const { quantity } = this.state
        this.getDogPicture(selectedBreed, quantity)
    }

    getDogPicture = async(selectedBreed, quantity) => {
        let dogAPIURL = "https://dog.ceo/api/breeds/image/random"
        if (selectedBreed && parseInt(quantity) > 0) {
          dogAPIURL = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${quantity}`
        }
        this.setState({
          picturesLoading: true
        })

        try {
          const { data } = await axios.get(dogAPIURL);
          console.log(data);
          this.setState({
            dogUrls: data.message,
            picturesLoading: false
          })
        } catch (error)  {
          console.log('err:', error);
        }
    }

    populateSelect = () => {
        const { breeds } = this.state;
        let breedOptions = [];
        breeds.forEach((breed) => {
          breedOptions.push(
            <option>{breed}</option>
          )
        })
        return breedOptions;
    }

    getDogBreeds = async () => {
        let dogBreedsURL = 'https://dog.ceo/api/breeds/list/all'
        try {
          const { data } = await axios.get(dogBreedsURL)
          const allBreeds = Object.keys(data.message)
          console.log(data)
          this.setState({
            breeds: allBreeds
          })
        } catch (error) {
          console.log('err: ', error)
        }
    }

    render() {
        const { dogUrls, selectedBreed, breeds, quantity } = this.state
        return (
            <div>
                <h1>Get Random Dogs!</h1>
                <select onChange={this.handleBreedChange} value=    {selectedBreed}>
                    <option></option>
                    {
                        breeds.map(breed => {
                        return <option value={breed}>{breed}</option>
                        })
                    }
                </select>
                <form>
                    <input id='number' type='number' min='0' value= {quantity} onChange={this.handleQuantityChange} />
                </form>
                <button onClick={this.handleNewDogButton}> new dog </button>
                <DogDisplay dogUrls={dogUrls} />
            </div>
        )
    }
}

export default DogSearch;
