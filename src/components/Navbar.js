import trollFace from "../images/Troll Face.png"

export default function Navbar(){
    return (
        <div className="container-navbar">
            <div className="navbar--left">
                <img className="navbar-icon" src={trollFace}></img>
                <h1>Meme Generator</h1>
            </div>
        </div>
    )
}