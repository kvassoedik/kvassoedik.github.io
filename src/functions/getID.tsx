interface API {
    url: URL,
    urlParams?: URLSearchParams,
    response?: Promise<Response>
}

export async function getID(email : string) {
    const myUrl : API = {
        url: new URL("https://fwd.innopolis.university/api/hw2"),
        urlParams: new URLSearchParams({email: email}),
    }
    const newUrl : API = {
        url: new URL(`${myUrl.url.origin}${myUrl.url.pathname}?${myUrl.urlParams}`)
    }
    const id : Promise<string> = (await fetch(newUrl.url.href)).text();
    return (await id).toString();
}