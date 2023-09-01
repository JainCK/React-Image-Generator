import React from "react";
import memesData from "../memesData";


export default function meme () {
        const [memeImage, setMemeImage] = React.useState("")


        function getMemeImage() {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMemeImage(memesArray[randomNumber].url)
            
        }



    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--inputs"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--inputs"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}