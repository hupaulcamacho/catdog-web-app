import React from 'react';

const CatDisplay = (props) => {
    let catUrls  = props.catUrls
    let catList = []
    for (let catUrl of catUrls) {
        catList.push(<img src={catUrl} height='200' alternate='cat' />)
    }

    return (
        <div>
            {catList}
        </div>
    )
}

export default CatDisplay