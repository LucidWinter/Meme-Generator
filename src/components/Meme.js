import React from "react";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function memeGenerator(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomNumber].url

        setMeme(prevState => ({
            ...prevState,
            randomImage: randomUrl
        }))
    }

    function textChange(event){
        const {name, value} = event.target

        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="container-form">
                <div className="container-grid-form">
                    <input onChange={textChange} name="topText" value={meme.topText} className="form--input" type="text" placeholder="Top text"/>
                    <input onChange={textChange} name="bottomText" value={meme.bottomText} className="form--input" type="text" placeholder="Bottom text"/>
                    <button onClick={memeGenerator} className="form--button">Get a new meme image</button>
                </div>
            </div>

            <div className="meme">
                <img className="meme--image" src={meme.randomImage} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}