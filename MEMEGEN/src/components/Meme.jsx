import React from "react";

export default function meme () {
    return (
        <main>
            <form className="form">
            <input type="text" 
            className="form--inputs" placeholder="Top text" />
            <input type="text" className="form--inputs" placeholder="Bottom text" />
            <button className="form--button" >Get a new meme image 🖼</button>
            </form>
        </main>
    )
}