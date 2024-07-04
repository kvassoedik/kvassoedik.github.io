import {formatDistanceToNowStrict} from "date-fns";

interface API {
    url: URL,
    urlParams?: URLSearchParams,
    response?: Promise<Response>
}

async function getID(email : string) {
    let myUrl : API = {
        url: new URL("https://fwd.innopolis.university/api/hw2"),
        urlParams: new URLSearchParams({email: email}),
    }
    let newUrl : API = {
        url: new URL(`${myUrl.url.origin}${myUrl.url.pathname}?${myUrl.urlParams}`)
    }
    let id : Promise<string> = (await fetch(newUrl.url.href)).text();
    return id;
}

async function getComics(id : string) {
    let myUrl : API = {
        url: new URL("https://fwd.innopolis.university/api/comic"),
        urlParams: new URLSearchParams({id: (await id).toString()}),
    }
    let newUrl : API = {
        url: new URL(`${myUrl.url.origin}${myUrl.url.pathname}?${myUrl.urlParams}`),    
    }

    let js : Promise<string> = (await fetch(newUrl.url.href)).json();
    
    return [JSON.parse(JSON.stringify(await js)).img, JSON.parse(JSON.stringify(await js)).safe_title, 
        [JSON.parse(JSON.stringify(await js)).day, JSON.parse(JSON.stringify(await js)).month, JSON.parse(JSON.stringify(await js)).year], 
        JSON.parse(JSON.stringify(await js)).alt];
}

(document.getElementById("get-comics-btn") as HTMLElement).addEventListener("click", async () => {
    let email : string = (document.getElementById("email-text") as HTMLFormElement).value;

    if (email.length <= 21 || email.slice(-21) != "@innopolis.university") {
        (document.getElementById("error-msg") as HTMLElement).textContent = "Wrong email!";
    } else {
        (document.getElementById("error-msg") as HTMLElement).textContent = "";

        let id : string = await getID((document.getElementById("email-text") as HTMLFormElement).value);
        
        if (!document.body.contains(document.getElementById("img-id"))) {
            let img : HTMLImageElement = document.createElement("img");
            let text : HTMLElement = document.createElement("p");
            
            let box : HTMLElement = (document.getElementById("box-comics") as HTMLElement);
            let comics : Array<string> = await getComics(id);
            img.src = comics[0];
            img.alt = comics[3];
            img.setAttribute("id", "img-id");
            img.setAttribute("class", "comics-img");
            img.setAttribute("title", comics[1])
        
            box.appendChild(img);
        
            text.setAttribute("id", "text-id");

            let date : string = new Date(Date.UTC(Number(comics[2][2]), Number(comics[2][1]), Number(comics[2][0]))).toLocaleDateString();

            text.textContent = '"' + comics[1] + '" ' + date + " " + formatDistanceToNowStrict(date) + " ago";
            box.appendChild(text);
        } else {
            let img : HTMLImageElement = document.getElementById("img-id") as HTMLImageElement;
            let text : HTMLElement = document.getElementById("text-id") as HTMLElement;

            let box : HTMLElement = document.getElementById("box-comics") as HTMLElement;
            let comics : Array<string> = await getComics(id);
            img.src = comics[0];
            img.alt = comics[3];
            img.setAttribute("id", "img-id");
            img.setAttribute("class", "comics-img");
            img.setAttribute("title", comics[1])
        
            box.appendChild(img);
        
            text.setAttribute("id", "text-id");

            let date : string = new Date(Date.UTC(Number(comics[2][2]), Number(comics[2][1]), Number(comics[2][0]))).toLocaleDateString();

            text.textContent = '"' + comics[1] + '" ' + date + " " + formatDistanceToNowStrict(date) + " ago";
            box.appendChild(text);
        }
        
    }
    
});