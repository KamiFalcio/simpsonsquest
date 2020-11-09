import React from 'react';

function Simpson({simp}){
    return(
        <div>
            <h2>{simp.character}</h2>
            <img src={simp.image} alt="Image"></img>
            <p>{simp.quote}</p>
        </div>
    )

};


export default Simpson;

