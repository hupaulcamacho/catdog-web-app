import React from 'react'

const DogDisplay = (props) => {
    let dogUrls = props.dogUrls
    console.log(dogUrls)
    let dogList = [];
    if (typeof dogUrls === 'string') {
        dogList.push(<img src={dogUrls} height='200' alternate='dog' />)
    } else {
        for(let dogUrl of dogUrls){
            console.log(dogUrl)
            dogList.push(<img src={dogUrl} height='200' alternate='dog' />) 
        }
    }

    return (
        <div>
            {dogList}
        </div>
    )
}

export default DogDisplay;