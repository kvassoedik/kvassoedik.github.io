import React, { useState } from "react"
import "../styles/comics.css"
import { getComics } from "../functions/getComic";

export default function ComicsGenerator() {
    const [email, setEmail] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [comics, setComics] = useState<Array<string>>(["", "", "", "", ""])

    const generateComics = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email.length <= 21 || email.slice(-21) != "@innopolis.university") {
            setError("Wrong email!");
        } else {
            setError("");
            setComics(await getComics(email));
        }
    }

    const handlerEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return(
        <div id="box-comics">
            <form id="email-form">
                <label>
                    Your Innopolis Email: <input type="email" id="email-text" name="email" onChange={handlerEmailChange}/>
                </label>
                <p id="error-msg">{error}</p>
                <button id="get-comics-btn" onClick={generateComics}>Get your comics</button>
            </form>
            
            <img src={comics[0]} alt={comics[3]} id="comics-img" className="comics-img" title={comics[1]}></img>
            <p id="text-id">{comics[1] + " " + comics[2] + " " + comics[4]}</p>
        </div>
    )
}